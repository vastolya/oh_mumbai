import { Children, cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";

/** Неразрывный пробел. */
const NBSP = "\u00A0";

/** Слова из трёх букв, которые нельзя оставлять висеть в конце строки. */
const GLUE_AFTER = [
  "для", "или", "как", "так", "над", "под", "про", "без", "при",
  "что", "это", "эта", "эти", "тот", "той", "чем", "том", "где",
  "уже", "ещё", "еще", "все", "всё", "был", "там", "тут",
  "его", "её", "ее", "их", "них", "нам", "нас", "вам", "вас", "мне",
  "они", "она", "оно", "два", "две", "три",
].join("|");

/** Частицы, которые нельзя отрывать от предыдущего слова. */
const GLUE_BEFORE = "же|ли|ль|бы|б";

/** Начало слова: старт строки, любой пробел или открывающий знак. */
const WORD_START = String.raw`(^|[\s(\[«„"—–])`;

/** Обычный (разрывный) пробел — тот, который и нужно заменить. */
const SPACE = String.raw`[ \t]+`;

/** Предлоги, союзы, частицы и местоимения в 1–2 буквы + список выше. */
const SHORT_WORD = new RegExp(
  `${WORD_START}([а-яёa-z]{1,2}|${GLUE_AFTER})${SPACE}`,
  "gi",
);
const PARTICLE = new RegExp(
  `${SPACE}(${GLUE_BEFORE})(?=[\\s.,;:!?)»…]|$)`,
  "gi",
);
/** Число и то, к чему оно относится: «13 лет», «2013 году». */
const NUMBER_UNIT = /(\d)[ \t]+(?=[а-яёa-z])/gi;
/** Тире не должно начинать строку — липнет к предыдущему слову. */
const EM_DASH = /(\S)[ \t]+([—–])(\s)/g;

/** Расставляет неразрывные пробелы по правилам русской типографики. */
export function typo(text: string): string {
  return text
    .replace(SHORT_WORD, `$1$2${NBSP}`)
    // второй проход — для цепочек вроде «и в доме»: первый съел разделитель
    .replace(SHORT_WORD, `$1$2${NBSP}`)
    .replace(PARTICLE, `${NBSP}$1`)
    .replace(NUMBER_UNIT, `$1${NBSP}`)
    .replace(EM_DASH, `$1${NBSP}$2$3`);
}

/** Рекурсивно применяет typo ко всем строковым узлам дерева. */
export function typograph(node: ReactNode): ReactNode {
  if (typeof node === "string") return typo(node);
  if (Array.isArray(node)) return Children.map(node, typograph);

  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    if (element.props.children === undefined) return node;
    return cloneElement(element, undefined, typograph(element.props.children));
  }

  return node;
}

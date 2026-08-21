import Acorn from "@/components/icons/Acorn";
import Pepper from "@/components/icons/Pepper";
import { cn } from "@/lib/utils";

/**
 * У блюда может быть один тег или ни одного — поэтому это union, а не
 * два независимых булевых флага: состояние «острое и с орехами»
 * невыразимо на уровне типов.
 */
export type DishTagId = "spicy" | "nut";

const tags = {
  spicy: { label: "Остро", icon: Pepper, tone: "bg-red" },
  nut: { label: "Содержит орехи", icon: Acorn, tone: "bg-green" },
} as const;

type DishTagProps = {
  tag: DishTagId;
  /** Всегда показывать подпись — для легенды над списком блюд. */
  expanded?: boolean;
  className?: string;
};

/**
 * Круглый бейдж с иконкой, который на ховере карточки (`group`)
 * раскрывается в пилюлю с подписью.
 *
 * Подпись всегда в DOM и только визуально обрезана, поэтому скринридер
 * читает её независимо от ховера.
 */
export default function DishTag({ tag, expanded, className }: DishTagProps) {
  const { label, icon: Icon, tone } = tags[tag];

  return (
    <span
      className={cn(
        "group/tag text-biege inline-flex h-12 items-center rounded-full",
        tone,
        className,
      )}
    >
      {/* Фиксированный квадрат 48×48: иконка центрируется им, а не паддингами,
          поэтому не съезжает при раскрытии подписи */}
      <span className="grid h-12 w-12 shrink-0 place-items-center">
        <Icon size={24} />
      </span>
      <span
        className={cn(
          "grid grid-cols-[0fr] motion-safe:transition-[grid-template-columns] motion-safe:duration-500 motion-safe:ease-out",
          expanded
            ? "grid-cols-[1fr]"
            : "group-hover/tag:grid-cols-[1fr]",
        )}
      >
        <span className="overflow-hidden">
          <span className="font-geometria block pr-4 text-sm whitespace-nowrap">
            {label}
          </span>
        </span>
      </span>
    </span>
  );
}

import Image, { type StaticImageData } from "next/image";

import DishTag from "@/components/menu/DishTag";
import Paragraph from "@/components/typography/Paragraph";
import { cn } from "@/lib/utils";

type MenuCardBaseProps = {
  name: string;
  image?: StaticImageData | string;
  /** Задержка появления подписи — для каскада в ряду карточек. */
  delay?: number;
  className?: string;
};

/**
 * Теги взаимоисключающие: `nut?: never` в ветке со `spicy` (и наоборот)
 * делает `<MenuCard spicy nut />` ошибкой типов. Допустимы ровно три
 * состояния: `spicy`, `nut`, ни одного.
 */
type MenuCardProps = MenuCardBaseProps &
  ({ spicy?: boolean; nut?: never } | { nut?: boolean; spicy?: never });

export default function MenuCard({
  name,
  image,
  spicy,
  nut,
  delay,
  className,
}: MenuCardProps) {
  const tag = spicy ? "spicy" : nut ? "nut" : undefined;

  return (
    <article className={cn("group flex flex-col gap-2", className)}>
      <div className="bg-gray relative h-92 overflow-hidden rounded-xs">
        {image && (
          /* Название блюда стоит рядом текстом — alt не дублируем */
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-700"
          />
        )}
        {tag && <DishTag tag={tag} className="absolute top-2 left-2" />}
      </div>

      <Paragraph delay={delay}>{name}</Paragraph>
    </article>
  );
}

import { cn } from "@/lib/utils";

/** Полоса контента: ширина макета и боковые поля. Едины для всех секций. */
const CONTAINER = "mx-auto max-w-480 px-60";

/** Базовая сетка макета: 12 колонок, жёлоб 24px. */
const GRID = "grid grid-cols-12 gap-6";

type SectionProps = {
  /** Тег обёртки: секция контента, шапка, подвал. */
  as?: "section" | "div" | "header" | "footer" | "nav";
  /**
   * `false` — только контейнер, без сетки: для блоков на flex (шапка).
   * Колонки при этом задаёт сам вызывающий.
   */
  grid?: boolean;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Обёртка секции страницы: ширина, боковые поля и 12-колоночная сетка.
 *
 * Вертикальные отступы и точечные правки жёлоба — через `className`
 * на месте вызова: `<Section className="pt-12 pb-30">`.
 */
export default function Section({
  as: Tag = "section",
  grid = true,
  className,
  children,
}: SectionProps) {
  return (
    <Tag className={cn(CONTAINER, grid && GRID, className)}>{children}</Tag>
  );
}

import { cn } from "@/lib/utils";

/** Собственный размер полосы в terracotta.svg. */
const BAND_W = 1074;
const BAND_H = 193;

const SRC = "url(/terracotta.svg)";

type TerracottaPatternProps = {
  /** Высота полосы в px. Ширина тайла масштабируется пропорционально. */
  height?: number;
  /** `x` — одна полоса (как в дизайне), `both` — заливка всей площади. */
  repeat?: "x" | "both";
  className?: string;
};

/**
 * Орнамент из terracotta.svg как фоновый слой.
 *
 * Рисуется маской, поэтому цвет берётся из `currentColor` — задаётся
 * через `text-*` на самом компоненте: `<TerracottaPattern className="text-seashell/20" />`.
 *
 * Кладётся в relative-контейнер, контент — выше по z-index.
 */
export default function TerracottaPattern({
  height = BAND_H,
  repeat = "x",
  className,
}: TerracottaPatternProps) {
  const size = `${Math.round((height * BAND_W) / BAND_H)}px ${height}px`;
  const mode = repeat === "x" ? "repeat-x" : "repeat";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 bg-current ",
        repeat === "both" && "bottom-0",
        className,
      )}
      style={{
        height: repeat === "x" ? height : undefined,
        maskImage: SRC,
        maskSize: size,
        maskRepeat: mode,
        WebkitMaskImage: SRC,
        WebkitMaskSize: size,
        WebkitMaskRepeat: mode,
      }}
    />
  );
}

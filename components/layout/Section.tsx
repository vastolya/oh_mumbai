import { cn } from "@/lib/utils";

const CONTAINER = "mx-auto w-[90rem]";

const GRID = "grid grid-cols-12 gap-6";

type SectionProps = {
  as?: "section" | "div" | "header" | "footer" | "nav";

  grid?: boolean;
  className?: string;
  children?: React.ReactNode;
};

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

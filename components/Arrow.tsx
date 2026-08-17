import { cn } from "@/lib/utils";

type ArrowDirection = "up" | "down" | "left" | "right";

type ArrowProps = {
  direction?: ArrowDirection;
  size?: number;
  className?: string;
};

const rotations: Record<ArrowDirection, string> = {
  right: "rotate-0",
  down: "rotate-90",
  left: "rotate-180",
  up: "-rotate-90",
};

export default function Arrow({
  direction = "right",
  size = 16,
  className,
}: ArrowProps) {
  return (
    <svg
      width={(size * 15) / 16}
      height={size}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(rotations[direction], className)}
    >
      <path
        d="M1.875 8L12.5 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.125 2.66699L12.1632 6.97441C12.7041 7.5514 12.7041 8.44925 12.1632 9.02624L8.125 13.3337"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

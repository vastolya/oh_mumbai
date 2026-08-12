type ChevronDirection = "up" | "down" | "left" | "right";

type ChevronProps = {
  direction?: ChevronDirection;
  size?: number;
  className?: string;
};

const rotations: Record<ChevronDirection, string> = {
  down: "rotate-0",
  up: "rotate-180",
  left: "rotate-90",
  right: "-rotate-90",
};

export default function Chevron({
  direction = "down",
  size = 16,
  className = "",
}: ChevronProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${rotations[direction]} ${className}`}
    >
      <path
        d="M14 5L9.06066 9.93934C8.47487 10.5251 7.52513 10.5251 6.93934 9.93934L2 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

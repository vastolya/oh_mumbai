import { cn } from "@/lib/utils";

type IconButtonProps = {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export default function IconButton({
  onClick,
  label,
  children,
  disabled,
  className,
}: IconButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#4D362E66]/40 text-white transition-all duration-300 hover:bg-[#4D362E66]/80",
        disabled && "pointer-events-none opacity-0",
        className,
      )}
    >
      {children}
    </button>
  );
}

import Link from "next/link";
import Arrow from "@/components/Arrow";
import Chevron from "@/components/Chevron";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  chevron?: boolean;
  arrow?: boolean;
  className?: string;
};

export default function NavLink({
  href,
  children,
  chevron = false,
  arrow = false,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:text-terracotta-hover group inline-flex cursor-pointer items-center gap-1 px-1 py-2 leading-none transition-all duration-300",
        className,
      )}
    >
      {children}
      {chevron && <Chevron size={16} className="shrink-0" />}
      {arrow && (
        <Arrow
          size={16}
          className="translate-y-px shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

import Link from "next/link";
import Chevron from "@/components/Chevron";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  chevron?: boolean;
  className?: string;
};

export default function NavLink({
  href,
  children,
  chevron = false,
  className,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "hover:text-terracotta-hover inline-flex cursor-pointer items-center gap-1 px-1 py-2 transition-all duration-300",
        className,
      )}
    >
      {children}
      {chevron && <Chevron size={14} />}
    </Link>
  );
}

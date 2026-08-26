"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/components/icons/Arrow";
import Chevron from "@/components/icons/Chevron";
import { cn } from "@/lib/utils";

const BASE =
  "hover:text-terracotta-hover group inline-flex cursor-pointer items-center gap-1 px-1 py-2 leading-none transition-all duration-300";

type NavLinkProps = {
  href?: string;
  as?: "span";
  children: React.ReactNode;
  chevron?: boolean;
  arrow?: boolean;
  className?: string;
};

function NavLinkInner({
  chevron,
  arrow,
  children,
}: Pick<NavLinkProps, "chevron" | "arrow" | "children">) {
  return (
    <>
      {children}
      {chevron && (
        <Chevron
          size={16}
          className="shrink-0 transition-transform duration-300 ease-in-out group-hover:rotate-180"
        />
      )}
      {arrow && (
        <Arrow
          size={16}
          className="translate-y-px shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );
}

export default function NavLink({
  href,
  as,
  children,
  chevron = false,
  arrow = false,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const active = href && pathname === href;

  if (as === "span") {
    return (
      <span className={cn(BASE, className)}>
        <NavLinkInner chevron={chevron} arrow={arrow}>
          {children}
        </NavLinkInner>
      </span>
    );
  }

  return (
    <Link href={href!} className={cn(BASE, active && "text-green", className)}>
      <NavLinkInner chevron={chevron} arrow={arrow}>
        {children}
      </NavLinkInner>
    </Link>
  );
}

import Link from "next/link";
import Chevron from "@/components/Chevron";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  chevron?: boolean;
};

export default function NavLink({ href, children, chevron = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="hover:text-terracotta-hover inline-flex cursor-pointer items-center gap-1 px-1 py-2 transition-all duration-300"
    >
      {children}
      {chevron && <Chevron size={14} />}
    </Link>
  );
}

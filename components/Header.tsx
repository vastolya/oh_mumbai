import Button from "@/components/Button";
import Logo from "@/components/Logo";
import NavLink from "@/components/NavLink";
import Link from "next/link";

export default function Header() {
  return (

      <header className="mx-auto flex max-w-[120rem] items-center justify-between px-60">
        <div className="flex gap-4 text-center text-base leading-[148%] font-normal tracking-normal text-white">
          <NavLink href="/menu" chevron>
            Меню
          </NavLink>
          <NavLink href="/interior">Интерьер</NavLink>
          <NavLink href="/about">О нас</NavLink>
          <NavLink href="/contacts">Контакты</NavLink>
        </div>

        <Link href="/">
          <Logo className="text-biege w-38" />
        </Link>
        <Button>Забронировать +7 (812) 314-03-40</Button>
      </header>
  
  );
}

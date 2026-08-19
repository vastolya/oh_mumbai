import BookingButton from "@/components/booking/BookingButton";
import Logo from "@/components/icons/Logo";
import NavLink from "@/components/ui/NavLink";
import Section from "@/components/layout/Section";
import Link from "next/link";

export default function Header() {
  return (
    <Section
      as="header"
      grid={false}
      className="flex items-center justify-between"
    >
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
      <BookingButton>Забронировать +7 (812) 314-03-40</BookingButton>
    </Section>
  );
}

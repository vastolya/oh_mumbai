"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import BookingButton from "@/components/booking/BookingButton";
import Logo from "@/components/icons/Logo";
import MenuNavItem from "@/components/layout/MenuNavItem";
import Section from "@/components/layout/Section";
import NavLink from "@/components/ui/NavLink";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setMenuOpen(true);
  };

  const handleLeave = () => {
    timer.current = setTimeout(() => setMenuOpen(false), 150);
  };

  return (
    <div
      className={cn(
        "relative transition-colors duration-400 ease-in-out",
        menuOpen && "bg-white",
      )}
    >
      <Section
        as="header"
        grid={false}
        className="flex items-center justify-between"
      >
        <div
          className={cn(
            "flex gap-4 text-center text-base leading-[148%] font-normal tracking-normal transition-colors duration-300 ease-in-out",
            menuOpen ? "text-chocolate" : "text-white",
          )}
        >
          <MenuNavItem
            open={menuOpen}
            onEnter={handleEnter}
            onLeave={handleLeave}
            onClose={() => setMenuOpen(false)}
          />
          <NavLink href="/interior">Интерьер</NavLink>
          <NavLink href="/about">О нас</NavLink>
          <NavLink href="/contacts">Контакты</NavLink>
        </div>

        <Link href="/">
          <Logo
            className={cn(
              "w-38 transition-colors duration-300 ease-in-out",
              menuOpen ? "text-chocolate" : "text-biege",
            )}
          />
        </Link>
        <BookingButton>Забронировать +7 (812) 314-03-40</BookingButton>
      </Section>
    </div>
  );
}

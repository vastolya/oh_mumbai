"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import BookingButton from "@/components/booking/BookingButton";
import Logo from "@/components/icons/Logo";
import MenuNavItem from "@/components/layout/MenuNavItem";
import Section from "@/components/layout/Section";
import NavLink from "@/components/ui/NavLink";
import { cn } from "@/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastY = useRef(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + 8) setHidden(true);
      else if (y < lastY.current - 8) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = () => {
    if (timer.current) clearTimeout(timer.current);
    setMenuOpen(true);
  };

  const handleLeave = () => {
    timer.current = setTimeout(() => setMenuOpen(false), 150);
  };

  return (
    <div
      ref={divRef}
      className={cn(
        "fixed top-0 right-0 left-0 z-40 bg-chocolate transition-transform duration-300 ease-in-out",
        hidden && "-translate-y-full",
      )}
    >
      <Section
        as="header"
        grid={false}
        className="flex items-center justify-between"
      >
        <div
          className={cn(
            "flex gap-4 text-center text-base leading-[148%] font-normal tracking-normal text-white",
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
            className="w-38 text-biege"
          />
        </Link>
        <BookingButton>Забронировать +7 (812) 314-03-40</BookingButton>
      </Section>
    </div>
  );
}

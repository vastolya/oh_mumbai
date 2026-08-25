"use client";

import Image from "next/image";
import Link from "next/link";

import Chevron from "@/components/icons/Chevron";
import Section from "@/components/layout/Section";
import Max from "@/components/social/Max";
import Telegram from "@/components/social/Telegram";
import WhatsApp from "@/components/social/WhatsApp";
import { cn } from "@/lib/utils";
import sample1 from "@/public/menu_sample_01.jpg";
import sample2 from "@/public/menu_sample_02.jpg";
import NavLink from "@/components/ui/NavLink";
import Paragraph from "../typography/Paragraph";

type Props = {
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onClose: () => void;
};

export default function MenuNavItem({
  open,
  onEnter,
  onLeave,
  onClose,
}: Props) {
  return (
    <>
      <span
        className="inline-flex"
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Link
          href="/menu"
          className="hover:text-terracotta-hover inline-flex cursor-pointer items-center gap-1 px-1 py-2 leading-none transition-colors duration-300"
        >
          Меню
          <Chevron
            size={16}
            className={cn(
              "shrink-0 transition-transform duration-300 ease-in-out",
              open ? "rotate-180" : "rotate-0",
            )}
          />
        </Link>
      </span>

      <div
        className={cn(
          "absolute top-full right-0 left-0 z-50 overflow-hidden",
          !open && "pointer-events-none",
        )}
      >
        <div
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className={cn(
            "bg-white transition-transform duration-300 ease-in-out",
            open ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <Section as="div" className="py-10">
            <Link
              href="/menu"
              onClick={onClose}
              className="group/card col-span-3 flex flex-col gap-2"
            >
              <div className="overflow-hidden rounded-xs">
                <Image
                  src={sample1}
                  alt="Основное меню"
                  placeholder="blur"
                  sizes="25vw"
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
              <NavLink
                as="span"
                href="/menu"
                className="text-chocolate group-hover/card:text-terracotta"
              >
                Основное меню
              </NavLink>
            </Link>

            <Link
              href="/menu?tab=bar"
              onClick={onClose}
              className="group/card col-span-3 flex flex-col gap-2"
            >
              <div className="overflow-hidden rounded-xs">
                <Image
                  src={sample2}
                  alt="Барная карта"
                  placeholder="blur"
                  sizes="25vw"
                  className="h-96 w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
              <NavLink
                as="span"
                href="/menu?tab=bar"
                className="text-chocolate group-hover/card:text-terracotta"
              >
                Барная карта
              </NavLink>
            </Link>

            <div className="col-span-3 col-start-10 flex flex-col justify-center px-22 text-left">
              <Paragraph className="text-chocolate pb-6" delay={0.1}>
                <a
                  href="tel:+78123140340"
                  className="hover:text-terracotta-hover transition-colors duration-300"
                >
                  +7 (812) 314-03-40
                </a>
              </Paragraph>

              <Paragraph
                className="text-chocolate pb-4 whitespace-nowrap"
                delay={0.2}
              >
                Санкт-Петербург, <br />
                переулок Гривцова, 2
              </Paragraph>

              <Paragraph className="text-chocolate pb-2" delay={0.3}>
                <span className="text-sm">Пн–Пт</span> 12:00–23:00
              </Paragraph>
              <Paragraph className="text-chocolate pb-6" delay={0.35}>
                <span className="text-sm">Сб–Вс</span> 13:00–23:00
              </Paragraph>

              <div className="flex gap-4">
                <Telegram
                  href="https://t.me/ohmumbai"
                  size={48}
                  fill="var(--color-chocolate)"
                  accentFill="var(--color-biege)"
                  hoverFill="#229ED9"
                  accentHoverFill="white"
                  animate={{ opacity: 1, scale: 1 }}
                />
                <Max
                  href="https://max.ru/ohmumbai"
                  size={48}
                  fill="var(--color-chocolate)"
                  hoverFill="#4783FD"
                  animate={{ opacity: 1, scale: 1 }}
                />
                <WhatsApp
                  href="https://wa.me/78123140340"
                  size={48}
                  fill="var(--color-chocolate)"
                  hoverFill="#25D366"
                  animate={{ opacity: 1, scale: 1 }}
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Section from "@/components/layout/Section";
import Image from "next/image";
import H3Title from "@/components/typography/H3Title";
import H2Title from "@/components/typography/H2Title";
import map from "@/public/map.jpg";
import Paragraph from "@/components/typography/Paragraph";
import BookingButton from "@/components/booking/BookingButton";
import NavLink from "@/components/ui/NavLink";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import Telegram from "@/components/social/Telegram";
import Max from "@/components/social/Max";
import WhatsApp from "@/components/social/WhatsApp";

export default function Footer() {
  const dontShowFooter = usePathname() !== "/contacts";

  return (
    <footer className="bg-green">
      <Section className="gap-y-0 pt-30">
        {dontShowFooter && (
          <Image
            src={map}
            alt="Карта: ресторан в центре Санкт-Петербурга"
            placeholder="blur"
            sizes="25vw"
            className="col-span-3 h-96 w-full rounded-xs object-cover"
          />
        )}

        {dontShowFooter && (
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A293e3281ebadb0ae5e51aacb62c119479e04233fe39f816720af2395c6d7526b&source=constructor"
            title="Карта: как добраться до ресторана"
            loading="lazy"
            allowFullScreen
            className="col-span-3 h-96 w-full rounded-xs"
          />
        )}

        {dontShowFooter && (
          <div className="col-span-6 flex flex-col justify-between">
            <H2Title>
              Индийский ресторан <br /> в центре Санкт-Петербурга
            </H2Title>

            <div>
              <H3Title className="pb-6">
                Санкт-Петербург, переулок Гривцова, 2
              </H3Title>

              <Paragraph className="pb-2">
                <span className="text-gray-light">Пн–Пт</span> 12:00–23:00
              </Paragraph>
              <Paragraph className="pb-12">
                <span className="text-gray-light">Сб–Вс</span> 13:00–23:00
              </Paragraph>

              <div className="flex gap-6">
                <BookingButton className="w-fit">Забронировать</BookingButton>
                <Paragraph className="flex flex-col justify-center">
                  <a
                    href="mailto:info@ohmumbai.ru"
                    className="hover:text-terracotta-hover hover:decoration-terracotta-hover underline decoration-[#B7B8AD] underline-offset-2 transition-colors duration-300"
                  >
                    info@ohmumbai.ru
                  </a>
                </Paragraph>
                <Paragraph className="text-gray-light flex flex-col justify-center">
                  ·
                </Paragraph>

                <Paragraph className="flex flex-col justify-center">
                  <a
                    href="tel:+78123140340"
                    className="hover:text-terracotta-hover hover:decoration-terracotta-hover underline decoration-[#B7B8AD] transition-colors duration-300"
                  >
                    +7 (812) 314-03-40
                  </a>
                </Paragraph>
              </div>
            </div>
          </div>
        )}

        <div className="border-biege col-span-12 flex items-center justify-between border-b-2 pt-20 pb-8">
          <div className="flex gap-5">
            <NavLink href="/menu" className="px-1 py-2">
              Меню
            </NavLink>
            <NavLink href="/about" className="px-1 py-2 whitespace-nowrap">
              О нас
            </NavLink>
            <NavLink href="/contacts" className="px-1 py-2">
              Контакты
            </NavLink>
          </div>

          <Link href="/">
            <Logo className="text-biege w-76" />
          </Link>

          <div className="flex gap-5">
            <Telegram href="https://t.me/ohmumbai" />
            <Max href="https://max.ru/ohmumbai" />
            <WhatsApp href="https://wa.me/78123140340" />
          </div>
        </div>

        <div className="col-span-12 flex gap-6 py-8">
          <NavLink href="/privacy">Политика конфиденциальности</NavLink>
          <NavLink href="/cookies">Настройки Cookies</NavLink>

          <Paragraph className="ml-auto self-center">
            © {new Date().getFullYear()} Oh!Mumbai. Все права защищены
          </Paragraph>
        </div>
      </Section>
    </footer>
  );
}

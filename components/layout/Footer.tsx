import Section from "@/components/layout/Section";
import Image from "next/image";
import H3Title from "@/components/typography/H3Title";
import H2Title from "@/components/typography/H2Title";
import map from "@/public/map.jpg";
import Paragraph from "@/components/typography/Paragraph";
import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";
import Logo from "@/components/icons/Logo";
import Link from "next/link";
import Telegram from "@/components/social/Telegram";
import Max from "@/components/social/Max";
import WhatsApp from "@/components/social/WhatsApp";

export default function Footer() {
  return (
    <footer className="bg-green pt-30">
      <Section className="gap-y-0">
        <H2Title className="col-span-12 pb-12">
          Индийский ресторан <br /> в центре Санкт-Петербурга
        </H2Title>

        <Image
          src={map}
          alt="Карта: ресторан в центре Санкт-Петербурга"
          placeholder="blur"
          sizes="25vw"
          className="col-span-3 h-96 w-full rounded-xs object-cover"
        />

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A293e3281ebadb0ae5e51aacb62c119479e04233fe39f816720af2395c6d7526b&source=constructor"
          title="Карта: как добраться до ресторана"
          loading="lazy"
          allowFullScreen
          className="col-span-3 h-96 w-full rounded-xs"
        />

        <div className="col-span-6 flex flex-col justify-end">
          <Paragraph className="pb-4">
            Санкт-Петербург, переулок Гривцова, 2
          </Paragraph>
          <Paragraph className="pb-2">Пн–Пт 12:00–23:00</Paragraph>
          <Paragraph className="pb-11">Сб–Вс 13:00–23:00</Paragraph>
          <H3Title className="pb-8">
            <a
              href="tel:+78123140340"
              className="hover:text-terracotta-hover transition-colors duration-300"
            >
              +7 (812) 314-03-40
            </a>
          </H3Title>

          <H3Title className="pb-11">
            <a
              href="mailto:info@ohmumbai.ru"
              className="hover:text-terracotta-hover transition-colors duration-300"
            >
              info@ohmumbai.ru
            </a>
          </H3Title>
          <Button className="w-fit">Забронировать стол</Button>
        </div>

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

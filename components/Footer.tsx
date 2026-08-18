import Image from "next/image";
import H3Title from "./H3Title";
import H2Title from "./H2Title";
import map from "@/public/map.jpg";
import Paragraph from "./Paragraph";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="bg-green pt-30 pb-20">
      <section className="mx-auto grid max-w-480 grid-cols-12 gap-6 px-60">
        <H2Title className="col-span-12">
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
      </section>
    </footer>
  );
}

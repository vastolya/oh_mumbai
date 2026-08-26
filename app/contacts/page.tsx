import BookingButton from "@/components/booking/BookingButton";
import Section from "@/components/layout/Section";
import H1Title from "@/components/typography/H1Title";
import H3Title from "@/components/typography/H3Title";
import Paragraph from "@/components/typography/Paragraph";
import AnimatedImage from "@/components/ui/AnimatedImage";
import map from "@/public/map.jpg";

export default function ContactsPage() {
  return (
    <main className="bg-green">
      <Section className="gap-y-0 text-white">
        <div className="col-span-3 pt-12">
          <H1Title className="pb-4" delay={0}>Контакты</H1Title>
          <Paragraph className="text-sm" delay={0.1}>
            Историческое здание на пересечении с набережная реки Мойки, вблизи
            Исаакиевского собора и Красного моста, рядом с метро Адмиралтейская
          </Paragraph>
        </div>

        <div className="col-span-6 col-start-7 py-12">
          <Paragraph className="mb-8" delay={0.15}>
            Санкт-Петербург, переулок Гривцова, 2
          </Paragraph>
          <Paragraph className="mb-2" delay={0.25}>
            <span className="text-sm">Пн–Пт</span> 12:00–23:00
          </Paragraph>
          <Paragraph className="mb-8" delay={0.3}>
            <span className="text-sm">Сб–Вс</span> 13:00–23:00
          </Paragraph>
          <H3Title className="mb-2 py-3" delay={0.35}>
            <a
              href="tel:+78123140340"
              className="hover:text-terracotta-hover transition-colors duration-300"
            >
              +7 (812) 314-03-40
            </a>
          </H3Title>
          <H3Title className="mb-8 py-3" delay={0.4}>
            <a
              href="mailto:info@ohmumbai.ru"
              className="hover:text-terracotta-hover transition-colors duration-300"
            >
              info@ohmumbai.ru
            </a>
          </H3Title>
          <BookingButton className="w-fit">Забронировать стол</BookingButton>
        </div>

        <AnimatedImage
          src={map}
          alt="Карта: ресторан в центре Санкт-Петербурга"
          delay={0}
          sizes="50vw"
          className="col-span-6 h-96 rounded-xs"
        />

        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A293e3281ebadb0ae5e51aacb62c119479e04233fe39f816720af2395c6d7526b&source=constructor"
          title="Карта: как добраться до ресторана"
          loading="lazy"
          allowFullScreen
          className="col-span-6 h-96 w-full rounded-xs"
        />
      </Section>
    </main>
  );
}

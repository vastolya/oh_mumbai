import BookingButton from "@/components/booking/BookingButton";
import Section from "@/components/layout/Section";
import H1Title from "@/components/typography/H1Title";
import H2Title from "@/components/typography/H2Title";
import H3Title from "@/components/typography/H3Title";
import Paragraph from "@/components/typography/Paragraph";
import AnimatedImage from "@/components/ui/AnimatedImage";
import map from "@/public/map.jpg";

export default function ContactsPage() {
  return (
    <main className="bg-green">
      <Section className="gap-y-0 text-white">
        <div className="col-span-3 py-12">
          <H1Title className="flex justify-start pb-4">Контакты</H1Title>
          <Paragraph className="text-gray-light">
            Историческое здание на пересечении с набережная реки Мойки, вблизи
            Исаакиевского собора и Красного моста, рядом с метро Адмиралтейская
          </Paragraph>
        </div>

        <div className="col-span-6 col-start-7 flex flex-col justify-between py-12">
          <div>
            <div className="flex items-center gap-6 pb-6">
              <H3Title>Санкт-Петербург, переулок Гривцова, 2</H3Title>
            </div>

            <Paragraph className="pb-2">
              <span className="text-gray-light">Пн–Пт</span> 12:00–23:00
            </Paragraph>
            <Paragraph className="pb-6">
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
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A293e3281ebadb0ae5e51aacb62c119479e04233fe39f816720af2395c6d7526b&source=constructor"
          title="Карта: как добраться до ресторана"
          loading="lazy"
          allowFullScreen
          className="col-span-12 h-197 w-full rounded-xs"
        />
      </Section>
    </main>
  );
}

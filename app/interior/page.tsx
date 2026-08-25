import Image from "next/image";
import Interior from "@/public/interior.jpg";
import Interior01 from "@/public/interior_01.jpg";
import Interior02 from "@/public/interior_02.jpg";
import Interior03 from "@/public/interior_03.jpg";
import Interior04 from "@/public/interior_04.jpg";
import Interior05 from "@/public/interior_05.jpg";
import Interior06 from "@/public/interior_06.jpg";
import H1Title from "@/components/typography/H1Title";
import Section from "@/components/layout/Section";
import H3Title from "@/components/typography/H3Title";
import Paragraph from "@/components/typography/Paragraph";

export default function InteriorPage() {
  return (
    <main className="bg-biege">
      <div className="relative flex h-79 w-screen items-center justify-center">
        <Image
          src={Interior}
          alt=""
          fill
          className="object-cover object-[center_75%]"
        />
        <H1Title className="relative z-20">Интерьер</H1Title>
      </div>
      <Section className="text-chocolate">
        <div className="col-span-6 py-30">
          <H3Title className="pb-6">
            Ресторан рассчитан на 37 посадочных мест
          </H3Title>
          <Paragraph className="pb-2">
            Премиальное пространство, где распределение мест позволяет соблюдать{" "}
            <br />
            приватность гостей
          </Paragraph>
          <Paragraph>
            При этом в центре зала — коммунальный стол, который позволяет
            объединять <br /> большие компании вечером или располагает к обеду
            среди других гостей
          </Paragraph>
        </div>
        <div className="col-span-6 py-30">
          <Paragraph className="pb-2">
            Основная идея дизайна — создать осмысленный современный <br />
            комфорт и транслировать именно ту интерпретацию Индии, которой
            <br /> хочет поделиться с гостями сама хозяйка заведения Шалини
          </Paragraph>
          <Paragraph>
            Стилистика интерьера близка к этно-модерну. Дизайн-код строится
            на контрасте <br /> двух составляющих: этнической аутентичности
            и современного комфорта. Глубокая бархатистая терракота и цвет
            шафрана задают природную цветовую тональность
          </Paragraph>
        </div>

        <Image
          src={Interior01}
          alt=""
          width={322}
          height={384}
          className="col-span-3 h-96 w-full rounded-sm"
        />

        <Image
          src={Interior02}
          alt=""
          width={322}
          height={384}
          className="col-span-3 h-96 w-full rounded-sm"
        />

        <Image
          src={Interior03}
          alt=""
          width={322}
          height={384}
          className="col-span-3 h-96 w-full rounded-sm"
        />

        <Image
          src={Interior04}
          alt=""
          width={322}
          height={384}
          className="col-span-3 h-96 w-full rounded-sm"
        />

        <Image
          src={Interior05}
          alt=""
          width={1400}
          height={788}
          className="col-span-12 h-197 w-full rounded-sm"
        />

        <Paragraph className="col-span-6 col-start-7 py-30">
          Спокойная фоновая база интерьера с элементами декоративных приемов{" "}
          <br />
          собирается у центральной росписи в стиле фрески. Это мурал индийского
          пейзажа. <br /> Как арт-объект роспись становится визуальным порталом,
          переносящим гостей <br /> из городской суеты в атмосферу зеленых
          холмов Кералы и дворцов Джайпура
        </Paragraph>
      </Section>
    </main>
  );
}

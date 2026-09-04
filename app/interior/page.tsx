"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Interior from "@/public/interior.jpg";
import Interior01 from "@/public/interior_01.jpg";
import Interior02 from "@/public/interior_02.jpg";
import Interior03 from "@/public/interior_03.jpg";
import Interior04 from "@/public/interior_04.jpg";
import Interior05 from "@/public/interior_05.jpg";
import Interior06 from "@/public/interior_06.jpg";
import Interior07 from "@/public/interior_07.jpg";
import Interior08 from "@/public/interior_08.jpg";
import Interior09 from "@/public/interior_09.jpg";
import Interior10 from "@/public/interior_10.jpg";
import Interior11 from "@/public/interior_11.jpg";
import Interior12 from "@/public/interior_12.jpg";
import H1Title from "@/components/typography/H1Title";
import Section from "@/components/layout/Section";
import H3Title from "@/components/typography/H3Title";
import Paragraph from "@/components/typography/Paragraph";
import InteriorPhotoModal, {
  InteriorPhoto,
} from "@/components/interior/InteriorPhotoModal";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const photos: InteriorPhoto[] = [
  {
    src: Interior01,
    alt: "Зал ресторана Oh Mumbai — терракотовые оттенки и этнический декор",
  },
  {
    src: Interior02,
    alt: "Посадочные места индийского ресторана Oh Mumbai в Петербурге",
  },
  {
    src: Interior03,
    alt: "Дизайн интерьера в стиле этно-модерн ресторана Oh Mumbai",
  },
  {
    src: Interior04,
    alt: "Коммунальный стол в центре зала ресторана Oh Mumbai",
  },
  {
    src: Interior05,
    alt: "Панорама зала ресторана Oh Mumbai — 37 мест, переулок Гривцова, Санкт-Петербург",
  },
  {
    src: Interior06,
    alt: "Мурал с индийским пейзажем — роспись в стиле фрески в ресторане Oh Mumbai",
  },
  {
    src: Interior07,
    alt: "Атмосфера вечернего зала индийского ресторана Oh Mumbai",
  },
  {
    src: Interior08,
    alt: "Зал ресторана Oh Mumbai для банкетов и частных мероприятий в центре Петербурга",
  },
  {
    src: Interior09,
    alt: "Детали декора Oh Mumbai — цвет шафрана и бархатистая терракота",
  },
  {
    src: Interior10,
    alt: "Этнические элементы интерьера индийского ресторана Oh Mumbai",
  },
  { src: Interior11, alt: "Декор и освещение зала ресторана Oh Mumbai" },
  {
    src: Interior12,
    alt: "Приватная зона индийского ресторана Oh Mumbai в Санкт-Петербурге",
  },
];

export default function InteriorPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = (i: number) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const prev = () => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () =>
    setSelectedIndex((i) => (i !== null && i < photos.length - 1 ? i + 1 : i));

  return (
    <main className="bg-biege">
      <div className="relative flex h-79 w-screen items-center justify-center">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={Interior}
            alt="Интерьер индийского ресторана Oh Mumbai в Санкт-Петербурге"
            fill
            priority
            className="object-cover object-[center_75%]"
          />
        </motion.div>
        <H1Title className="relative z-20" delay={0.3}>
          Интерьер
        </H1Title>
      </div>

      <Section className="text-chocolate gap-y-0">
        <div className="col-span-6 py-30">
          <H3Title className="pb-6" delay={0}>
            Ресторан рассчитан на 37 посадочных мест
          </H3Title>
          <Paragraph className="pb-2" delay={0.1}>
            Премиальное пространство, где распределение мест позволяет соблюдать{" "}
            приватность гостей
          </Paragraph>
          <Paragraph delay={0.2}>
            При этом в центре зала — коммунальный стол, который позволяет
            объединять большие компании вечером или располагает к обеду среди
            других гостей
          </Paragraph>
        </div>
        <div className="col-span-6 py-30">
          <Paragraph className="pb-2" delay={0.15}>
            Основная идея дизайна — создать осмысленный современный комфорт и
            транслировать именно ту интерпретацию Индии, которой хочет
            поделиться с гостями сама хозяйка заведения Шалини
          </Paragraph>
          <Paragraph delay={0.25}>
            Стилистика интерьера близка к этно-модерну. Дизайн-код строится на
            контрасте двух составляющих: этнической аутентичности и современного
            комфорта. Глубокая бархатистая терракота и цвет шафрана задают
            природную цветовую тональность
          </Paragraph>
        </div>

        {[0, 1, 2, 3].map((i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="group col-span-3 h-96 w-full cursor-pointer overflow-hidden rounded-sm"
            {...fadeUp(i * 0.1)}
          >
            <Image
              src={photos[i].src}
              alt={photos[i].alt}
              width={322}
              height={384}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}

        <motion.button
          type="button"
          onClick={() => open(4)}
          className="group col-span-12 mt-6 h-197 w-full cursor-pointer overflow-hidden rounded-sm"
          {...fadeUp(0)}
        >
          <Image
            src={photos[4].src}
            alt={photos[4].alt}
            width={1400}
            height={788}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.button>

        <Paragraph className="col-span-6 col-start-7 py-30" delay={0.1}>
          Спокойная фоновая база интерьера с элементами декоративных приемов{" "}
          собирается у центральной росписи в стиле фрески. Это мурал индийского
          пейзажа. Как арт-объект роспись становится визуальным порталом,
          переносящим гостей из городской суеты в атмосферу зеленых холмов
          Кералы и дворцов Джайпура
        </Paragraph>

        {[5, 6].map((i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="group col-span-6 h-96 w-full cursor-pointer overflow-hidden rounded-sm"
            {...fadeUp((i - 5) * 0.15)}
          >
            <Image
              src={photos[i].src}
              alt={photos[i].alt}
              width={688}
              height={384}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}

        <motion.button
          type="button"
          onClick={() => open(7)}
          className="group col-span-12 my-6 h-197 w-full cursor-pointer overflow-hidden rounded-sm"
          {...fadeUp(0)}
        >
          <Image
            src={photos[7].src}
            alt={photos[7].alt}
            width={688}
            height={384}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.button>

        {[8, 9, 10, 11].map((i) => (
          <motion.button
            key={i}
            type="button"
            onClick={() => open(i)}
            className="group col-span-3 h-96 w-full cursor-pointer overflow-hidden rounded-sm"
            {...fadeUp((i - 8) * 0.1)}
          >
            <Image
              src={photos[i].src}
              alt={photos[i].alt}
              width={322}
              height={384}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.button>
        ))}

        <Paragraph className="col-span-6 col-start-7 py-30" delay={0.1}>
          Такой формат подходит тем, кто ищет ресторан для свадьбы, банкета для
          близких или небольших корпоративов в Санкт-Петербурге – атмосфера
          Oh!Mumbai подходит для любого повода. Будем рады обсудить формат под
          ваше событие
        </Paragraph>
      </Section>

      <InteriorPhotoModal
        open={selectedIndex !== null}
        photo={selectedIndex !== null ? photos[selectedIndex] : null}
        photoIndex={selectedIndex ?? 0}
        onClose={close}
        onPrev={prev}
        onNext={next}
        hasPrev={(selectedIndex ?? 0) > 0}
        hasNext={(selectedIndex ?? 0) < photos.length - 1}
      />
    </main>
  );
}

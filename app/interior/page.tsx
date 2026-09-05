"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Art from "@/public/art.jpg";
import Explore from "@/public/explore.jpg";
import Interior from "@/public/interior.jpg";
import Interior01 from "@/public/interior_01.jpg";
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
import Interior14 from "@/public/interior_14.jpg";
import Interior15 from "@/public/interior_15.jpg";
import Interior16 from "@/public/interior_16.jpg";
import Interior17 from "@/public/interior_17.jpg";
import InteriorChair from "@/public/interior_chair.jpg";
import H1Title from "@/components/typography/H1Title";
import Section from "@/components/layout/Section";
import H3Title from "@/components/typography/H3Title";
import Paragraph from "@/components/typography/Paragraph";
import InteriorPhotoModal, {
  InteriorPhoto,
} from "@/components/interior/InteriorPhotoModal";
import { cn } from "@/lib/utils";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: "easeOut" as const },
});

const photos: InteriorPhoto[] = [
  {
    src: Explore,
    alt: "Панорама зала ресторана Oh Mumbai — 37 мест, переулок Гривцова, Санкт-Петербург",
  },
  {
    src: Interior01,
    alt: "Роспись с логотипом Oh Mumbai — терракотовые оттенки и этнический декор",
  },
  {
    src: InteriorChair,
    alt: "Посадочные места индийского ресторана Oh Mumbai в Петербурге",
  },
  {
    src: Interior07,
    alt: "Зал ресторана Oh Mumbai с плетёными люстрами и муралом",
  },
  {
    src: Interior04,
    alt: "Столик у окна с зеленью — приватная зона ресторана Oh Mumbai",
  },
  {
    src: Interior06,
    alt: "Барная стойка индийского ресторана Oh Mumbai в центре Санкт-Петербурга",
  },
  {
    src: Interior,
    alt: "Зал ресторана Oh Mumbai с диванами и винным шкафом",
  },
  {
    src: Interior03,
    alt: "Ниша у окна с бра — дизайн интерьера в стиле этно-модерн",
  },
  {
    src: Interior14,
    alt: "Мягкий диван у окна в индийском ресторане Oh Mumbai",
  },
  {
    src: Interior08,
    alt: "Зал ресторана Oh Mumbai для банкетов и частных мероприятий в центре Петербурга",
  },
  {
    src: Interior09,
    alt: "Арка барной стойки Oh Mumbai — цвет шафрана и бархатистая терракота",
  },
  {
    src: Interior15,
    alt: "Бар ресторана Oh Mumbai с тропической зеленью и мраморной столешницей",
  },
  {
    src: Interior17,
    alt: "Край барной стойки Oh Mumbai с открытыми полками",
  },
  {
    src: Interior05,
    alt: "Мурал с индийским пейзажем — роспись в стиле фрески в ресторане Oh Mumbai",
  },
  {
    src: Interior10,
    alt: "Вход в зал ресторана Oh Mumbai — шторы и этнические элементы интерьера",
  },
  {
    src: Interior16,
    alt: "Детали бара Oh Mumbai — стекло, латунь и мрамор",
  },
  {
    src: Interior11,
    alt: "Санузел ресторана Oh Mumbai с каменной раковиной и арочным зеркалом",
  },
  {
    src: Interior12,
    alt: "Роспись с павлином — декор и освещение в ресторане Oh Mumbai",
  },
];

const LAYOUT = {
  hero: 0,

  gridTop: [1, 2, 3, 4],
  bigTop: 5,

  bigMid: 6,
  pairMid: [7, 8],

  rowMid: [9, 10, 11, 12],

  mural: 13,

  rowBottom: [14, 15, 16, 17],
};

const SIZES_FULL = "1440px";
const SIZES_HALF = "708px";
const SIZES_QUARTER = "342px";

type PhotoTileProps = {
  index: number;
  sizes: string;
  className?: string;
  delay?: number;
  onOpen: (index: number) => void;
};

const PhotoTile = ({
  index,
  sizes,
  className,
  delay = 0,
  onOpen,
}: PhotoTileProps) => (
  <motion.button
    type="button"
    onClick={() => onOpen(index)}
    className={cn(
      "group relative w-full cursor-pointer overflow-hidden rounded-sm",
      className,
    )}
    {...fadeUp(delay)}
  >
    <Image
      src={photos[index].src}
      alt={photos[index].alt}
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
    />
  </motion.button>
);

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
            src={Art}
            alt="Интерьер индийского ресторана Oh Mumbai в Санкт-Петербурге"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_75%]"
          />
        </motion.div>
        <H1Title className="relative z-20" delay={0.3}>
          Интерьер
        </H1Title>
      </div>

      <Section className="text-chocolate gap-y-0 py-30">
        <H3Title
          className="col-span-6 row-span-2 flex flex-col justify-end pb-12"
          delay={0}
        >
          Ресторан рассчитан <br /> на 37 посадочных мест
        </H3Title>

        <Paragraph className="col-span-6 pb-2" delay={0.15}>
          Премиальное пространство, где распределение мест позволяет соблюдать
          приватность гостей
        </Paragraph>
        <Paragraph className="col-span-6 pb-12" delay={0.25}>
          При этом в центре зала — коммунальный стол, который позволяет
          объединять большие компании вечером или располагает к обеду среди
          других гостей
        </Paragraph>

        <PhotoTile
          index={LAYOUT.hero}
          sizes={SIZES_FULL}
          className="col-span-12 h-197"
          onOpen={open}
        />

        <div className="col-span-6 mt-6 grid grid-cols-2 gap-6">
          {LAYOUT.gridTop.map((index, n) => (
            <PhotoTile
              key={n}
              index={index}
              sizes={SIZES_QUARTER}
              className="h-96"
              delay={n * 0.1}
              onOpen={open}
            />
          ))}
        </div>
        <PhotoTile
          index={LAYOUT.bigTop}
          sizes={SIZES_HALF}
          className="col-span-6 mt-6"
          onOpen={open}
        />

        <PhotoTile
          index={LAYOUT.bigMid}
          sizes={SIZES_HALF}
          className="col-span-6 mt-6 h-197"
          onOpen={open}
        />
        <div className="col-span-6 mt-6 flex flex-col">
          <Paragraph className="pb-6" delay={0.15}>
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

          <div className="mt-auto grid grid-cols-2 gap-6">
            {LAYOUT.pairMid.map((index, n) => (
              <PhotoTile
                key={n}
                index={index}
                sizes={SIZES_QUARTER}
                className="h-96"
                delay={n * 0.1}
                onOpen={open}
              />
            ))}
          </div>
        </div>

        {LAYOUT.rowMid.map((index, n) => (
          <PhotoTile
            key={n}
            index={index}
            sizes={SIZES_QUARTER}
            className="col-span-3 mt-6 h-96"
            delay={n * 0.1}
            onOpen={open}
          />
        ))}

        <Paragraph className="col-span-6 col-start-7 py-14" delay={0.1}>
          Спокойная фоновая база интерьера с элементами декоративных приемов
          собирается у центральной росписи в стиле фрески. Это мурал индийского
          пейзажа. Как арт-объект роспись становится визуальным порталом,
          переносящим гостей из городской суеты в атмосферу зеленых холмов
          Кералы и дворцов Джайпура
        </Paragraph>

        <PhotoTile
          index={LAYOUT.mural}
          sizes={SIZES_FULL}
          className="col-span-12 h-197"
          onOpen={open}
        />

        {LAYOUT.rowBottom.map((index, n) => (
          <PhotoTile
            key={n}
            index={index}
            sizes={SIZES_QUARTER}
            className="col-span-3 mt-6 h-96"
            delay={n * 0.1}
            onOpen={open}
          />
        ))}

        <Paragraph
          className="col-span-6 col-start-4 pt-30 text-center"
          delay={0.1}
        >
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

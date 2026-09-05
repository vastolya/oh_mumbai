"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Grid from "@/components/icons/Grid";
import DishPhotoCard from "@/components/menu/DishPhotoCard";
import DishModal from "@/components/menu/DishModal";
import NavLink from "@/components/ui/NavLink";
import Paragraph from "../typography/Paragraph";

const TABS = [
  {
    label: "Основное меню",
    src: "/menu.jpg",
    alt: "Основное меню Oh!Mumbai",
    key: "menu",
  },
  {
    label: "Завтраки",
    src: "/menu_zavtrak.jpg",
    alt: "Завтраки Oh!Mumbai",
    key: "zavtrak",
  },
  {
    label: "Барная карта",
    src: "/menu_bar.jpg",
    alt: "Барная карта Oh!Mumbai",
    key: "bar",
  },
];

// TODO: replace with real dish photos
const CARDS: {
  src: string;
  alt: string;
  description: string;
  price: string;
  weight: string;
  tab: "menu" | "zavtrak" | "bar";
  spicy?: boolean;
  nut?: boolean;
  veg?: boolean;
}[] = [
  {
    src: "/menu_sample_01.jpg",
    alt: "Баттер чикен",
    description:
      "Нежная курица в сливочно-томатном соусе с кардамоном и кориандром",
    price: "520 ₽",
    weight: "320 г",
    tab: "menu",
    spicy: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Палак панир",
    description: "Домашний сыр в насыщенном шпинатном соусе со специями",
    price: "420 ₽",
    weight: "280 г",
    tab: "menu",
    veg: true,
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Самоса",
    description: "Хрустящие пирожки с пряной начинкой из картофеля и гороха",
    price: "220 ₽",
    weight: "180 г",
    tab: "menu",
    veg: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Биряни с бараниной",
    description: "Ароматный рис с томлёной бараниной, шафраном и жареным луком",
    price: "640 ₽",
    weight: "400 г",
    tab: "menu",
    spicy: true,
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Дал махани",
    description: "Чёрная чечевица, томлёная ночь с маслом и сливками",
    price: "380 ₽",
    weight: "300 г",
    tab: "menu",
    veg: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Рыба тандури",
    description: "Филе в маринаде из йогурта и специй, запечённое в тандуре",
    price: "580 ₽",
    weight: "280 г",
    tab: "menu",
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Тикка масала",
    description: "Курица на углях в остром томатном соусе с пажитником",
    price: "560 ₽",
    weight: "340 г",
    tab: "menu",
    spicy: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Курица тандури",
    description: "Целая нога в йогуртовом маринаде, с дымком живого огня",
    price: "490 ₽",
    weight: "380 г",
    tab: "menu",
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Хайдарабади биряни",
    description: "Рис по-хайдарабадски с бараниной, мятой и жареными орехами",
    price: "690 ₽",
    weight: "420 г",
    tab: "menu",
    nut: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Саг алу",
    description: "Молодой картофель с нежным шпинатом и куркумой",
    price: "360 ₽",
    weight: "260 г",
    tab: "menu",
    veg: true,
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Яичница масала",
    description: "Яйца с томатами, луком и смесью специй по-мумбайски",
    price: "290 ₽",
    weight: "220 г",
    tab: "zavtrak",
    spicy: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Авокадо тост",
    description: "Тост с авокадо, редисом, кинзой и зернистой горчицей",
    price: "320 ₽",
    weight: "200 г",
    tab: "zavtrak",
    veg: true,
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Сырный наан",
    description: "Лепёшка из тандура с расплавленным сыром и зелёным луком",
    price: "260 ₽",
    weight: "160 г",
    tab: "zavtrak",
    veg: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Парата с картофелем",
    description: "Слоёная пшеничная лепёшка с пряной картофельной начинкой",
    price: "280 ₽",
    weight: "180 г",
    tab: "zavtrak",
    veg: true,
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Овощной омлет",
    description: "Пышный омлет с болгарским перцем, помидорами и зеленью",
    price: "240 ₽",
    weight: "200 г",
    tab: "zavtrak",
    veg: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Манго ласси",
    description: "Густой йогуртовый напиток с альфонсо-манго и кардамоном",
    price: "220 ₽",
    weight: "300 мл",
    tab: "bar",
    veg: true,
  },
  {
    src: "/menu_sample_01.jpg",
    alt: "Чай масала",
    description: "Крепкий чай с молоком, имбирём, гвоздикой и корицей",
    price: "180 ₽",
    weight: "250 мл",
    tab: "bar",
    veg: true,
  },
  {
    src: "/menu_sample_02.jpg",
    alt: "Имбирный лимонад",
    description: "Свежевыжатый лайм, имбирный сироп, мята и газированная вода",
    price: "200 ₽",
    weight: "350 мл",
    tab: "bar",
    veg: true,
  },
];

export default function MenuImageTabs() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const tabFromUrl = Math.max(
    0,
    TABS.findIndex((t) => t.key === tabParam),
  );

  const [manualTab, setManualTab] = useState<number | null>(null);
  const [prevTabFromUrl, setPrevTabFromUrl] = useState(tabFromUrl);
  const [viewMode, setViewMode] = useState<"image" | "grid">("image");
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (tabFromUrl !== prevTabFromUrl) {
    setPrevTabFromUrl(tabFromUrl);
    setManualTab(null);
    setVisibleCount(8);
    setSelectedIndex(null);
  }

  const active = manualTab ?? tabFromUrl;
  const filteredCards = CARDS.filter((c) => c.tab === TABS[active].key);

  return (
    <div className="col-span-12">
      <div className="relative flex items-center justify-center gap-1 pb-8">
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            onClick={() => {
              setManualTab(i);
              setVisibleCount(8);
              setSelectedIndex(null);
            }}
            className="font-geometria relative cursor-pointer rounded-[3rem] px-4 py-2 text-base leading-[150%] font-normal"
          >
            {i === active && (
              <motion.span
                layoutId="pill"
                className="bg-green absolute inset-0 rounded-[3rem]"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <motion.span
              className="relative z-10"
              animate={{ color: i === active ? "#ffffff" : "#9b9894" }}
              transition={{ duration: 0.25 }}
            >
              {tab.label}
            </motion.span>
          </button>
        ))}

        <button
          onClick={() => setViewMode((v) => (v === "image" ? "grid" : "image"))}
          className="text-gray hover:text-chocolate absolute right-0 flex cursor-pointer items-center py-2 transition-colors duration-200"
        >
          <Paragraph className="text-sm">
            {viewMode === "image" ? "Фото" : "PDF"}
          </Paragraph>
          <span
            className="flex shrink-0 items-center overflow-hidden"
            style={{
              opacity: viewMode === "image" ? 1 : 0,
              width: viewMode === "image" ? "48px" : "0px",
              marginLeft: viewMode === "image" ? "8px" : "0px",
              transition:
                "opacity 0.2s ease, width 0.2s ease, margin-left 0.2s ease",
            }}
          >
            <Grid size={48} />
          </span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "image" ? (
          <motion.div
            key={`image-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full"
          >
            <Image
              src={TABS[active].src}
              alt={TABS[active].alt}
              width={1200}
              height={1800}
              sizes="1440px"
              priority={active === tabFromUrl && manualTab === null}
              className="h-auto w-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key={`grid-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-12 gap-6 gap-y-8"
          >
            {filteredCards.slice(0, visibleCount).map((card, i) => (
              <DishPhotoCard
                key={card.alt}
                src={card.src}
                name={card.alt}
                description={card.description}
                price={card.price}
                weight={card.weight}
                delay={i * 0.06}
                spicy={card.spicy}
                nut={card.nut}
                veg={card.veg}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {viewMode === "grid" && visibleCount < filteredCards.length && (
        <div className="flex justify-center pt-10">
          <button type="button" onClick={() => setVisibleCount((n) => n + 8)}>
            <NavLink as="span" className="text-chocolate">
              Загрузить ещё
            </NavLink>
          </button>
        </div>
      )}

      <DishModal
        open={selectedIndex !== null}
        dish={
          selectedIndex !== null
            ? {
                src: filteredCards[selectedIndex].src,
                name: filteredCards[selectedIndex].alt,
                description: filteredCards[selectedIndex].description,
                price: filteredCards[selectedIndex].price,
                weight: filteredCards[selectedIndex].weight,
                spicy: filteredCards[selectedIndex].spicy,
                nut: filteredCards[selectedIndex].nut,
                veg: filteredCards[selectedIndex].veg,
              }
            : null
        }
        dishIndex={selectedIndex ?? 0}
        onClose={() => setSelectedIndex(null)}
        onPrev={() =>
          setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))
        }
        onNext={() =>
          setSelectedIndex((i) =>
            i !== null && i < filteredCards.length - 1 ? i + 1 : i,
          )
        }
        hasPrev={(selectedIndex ?? 0) > 0}
        hasNext={(selectedIndex ?? 0) < filteredCards.length - 1}
      />
    </div>
  );
}

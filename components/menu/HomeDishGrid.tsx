"use client";

import { useState } from "react";
import MenuCard from "@/components/menu/MenuCard";
import DishModal, { type DishModalDish } from "@/components/menu/DishModal";

type FeaturedDish = DishModalDish & { delay?: number };

const FEATURED: FeaturedDish[] = [
  {
    src: "/menu_sample_01.jpg",
    name: "Тандури чикен",
    description: "Целая нога в йогуртовом маринаде, с дымком живого огня",
    price: "490 ₽",
    weight: "380 г",
    spicy: true,
  },
  {
    src: "/menu_sample_02.jpg",
    name: "Курма",
    description: "Нежная курица в сливочном соусе с кешью и кардамоном",
    price: "520 ₽",
    weight: "320 г",
    nut: true,
    delay: 0.1,
  },
  {
    src: "/menu_sample_01.jpg",
    name: "Дал тадка",
    description: "Жёлтая чечевица с темперингом из зиры, чеснока и помидоров",
    price: "360 ₽",
    weight: "280 г",
    veg: true,
    delay: 0.2,
  },
  {
    src: "/menu_sample_02.jpg",
    name: "Панир тикка",
    description: "Кубики домашнего сыра в маринаде тандури с перцем",
    price: "420 ₽",
    weight: "260 г",
    spicy: true,
    delay: 0.3,
  },
];

export default function HomeDishGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      {FEATURED.map((dish, i) => (
        <MenuCard
          key={dish.name}
          name={dish.name}
          image={dish.src}
          delay={dish.delay}
          className="col-span-3"
          onClick={() => setSelectedIndex(i)}
          {...(dish.spicy ? { spicy: true } : dish.nut ? { nut: true } : {})}
        />
      ))}

      <DishModal
        open={selectedIndex !== null}
        dish={selectedIndex !== null ? FEATURED[selectedIndex] : null}
        dishIndex={selectedIndex ?? 0}
        onClose={() => setSelectedIndex(null)}
        onPrev={() => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
        onNext={() =>
          setSelectedIndex((i) =>
            i !== null && i < FEATURED.length - 1 ? i + 1 : i,
          )
        }
        hasPrev={(selectedIndex ?? 0) > 0}
        hasNext={(selectedIndex ?? 0) < FEATURED.length - 1}
      />
    </>
  );
}

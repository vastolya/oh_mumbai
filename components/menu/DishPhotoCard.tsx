"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DishTag from "@/components/menu/DishTag";
import Paragraph from "@/components/typography/Paragraph";
import { cn } from "@/lib/utils";

type DishPhotoCardProps = {
  src: string;
  name: string;
  description: string;
  price: string;
  weight: string;
  delay?: number;
  spicy?: boolean;
  nut?: boolean;
  veg?: boolean;
  onClick?: () => void;
};

export default function DishPhotoCard({
  src,
  name,
  description,
  price,
  weight,
  delay = 0,
  spicy,
  nut,
  veg,
  onClick,
}: DishPhotoCardProps) {
  const dishTag = spicy ? "spicy" : nut ? "nut" : undefined;

  return (
    <motion.div
      className={cn(
        "group col-span-3 flex flex-col gap-3",
        onClick && "cursor-pointer",
      )}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-sm">
        <Image
          src={src}
          alt=""
          width={600}
          height={600}
          className="h-96 w-full rounded-sm object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {dishTag && <DishTag tag={dishTag} className="absolute top-2 left-2" />}
        {veg && (
          <Paragraph className="bg-biege/20 absolute top-2 right-2 rounded-[2.625rem] p-2 backdrop-blur-sm">
            Вегетарианское
          </Paragraph>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <Paragraph className="text-chocolate">{name}</Paragraph>
        <div className="flex justify-between pb-1">
          <Paragraph className="text-gray">{weight}</Paragraph>{" "}
          <Paragraph className="text-chocolate">{price}</Paragraph>{" "}
        </div>
        <Paragraph className="text-gray flex-1 text-sm">
          {description}
        </Paragraph>
      </div>
    </motion.div>
  );
}

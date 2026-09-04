"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Interior_05 from "@/public/interior_05.jpg";
import Interior_08 from "@/public/interior_08.jpg";
import Table from "@/public/table.jpg";
import Today from "@/public/today.jpg";
import H1Title from "@/components/typography/H1Title";
import Section from "@/components/layout/Section";
import H2Title from "@/components/typography/H2Title";
import Paragraph from "@/components/typography/Paragraph";
import AnimatedImage from "@/components/ui/AnimatedImage";
import NavLink from "@/components/ui/NavLink";
import H3Title from "@/components/typography/H3Title";

export default function AboutPage() {
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
            src={Interior_05}
            alt="Интерьер индийского ресторана Oh Mumbai в Санкт-Петербурге"
            fill
            priority
            className="object-cover object-[center_48%]"
          />
        </motion.div>
        <H1Title className="relative z-20" delay={0.3}>
          О ресторане Oh!Mumbai
        </H1Title>
      </div>

      <Section className="text-chocolate! gap-y-0 py-30">
        <div className="col-span-5 flex flex-col">
          <H2Title className="text-chocolate pb-12" delay={0}>
            Как домашний стол вырос в ресторан
          </H2Title>
          <Paragraph className="text-gray pb-2" delay={0.1}>
            История
          </Paragraph>
          <Paragraph className="pb-6" delay={0.2}>
            Oh!Mumbai — семейный ресторан индийской кухни, интерпретированной на
            современный лад. Традиционная индийская кухня перекликается с
            современной подачей, а за достоверность исполнения и гостеприимство
            отвечает семья владельцев с индийскими корнями
          </Paragraph>
          <Paragraph className="text-gray pb-2" delay={0.3}>
            Основательница проекта Шалини делится:
          </Paragraph>
          <Paragraph className="pb-6" delay={0.4}>
            «Первый индийский ресторан в нашей семье открыла мама больше
            двадцати лет назад. В какой‑то момент все гости, которых приглашал
            папа, перестали помещаться дома. Поэтому родители решили открыть
            ресторан Swagat, это «добро пожаловать» с хинди. Oh!Mumbai — наш
            второй проект, но мы не считаем себя профессионалами, просто хотим
            делиться тем, как вкусно готовили в нашей семье. Год назад мамы не
            стало, и нам было важно сохранить все рецепты и дело, которым она
            когда‑то занималась»
          </Paragraph>
          <Paragraph delay={0.5}>
            Oh! Mumbai — это чистая эмоция смешанных чувств, когда кто‑то
            приезжает в один из городов Индии впервые. Совсем не обязательно это
            Мумбай, но мы хотели передать эмоцию почти каждого, кто увидел Индию
            своими глазами. Мы отходим от туристического и стереотипного
            представления об Индии и передаём её аутентичный колорит вкусов и
            сочетаний так, как это принято в семье владельцев ресторана
          </Paragraph>
        </div>

        <AnimatedImage
          src={Table}
          alt=""
          delay={0}
          className="col-span-6 col-start-7 mb-30 h-197 rounded-sm"
        />

        <div className="text-chocolate col-span-12 flex justify-between pb-12">
          <H2Title className="text-chocolate" delay={0}>
            Индийский ресторан в самом центре Санкт-Петербурга
          </H2Title>
          <NavLink arrow href="/interior">
            Смотреть интерьер
          </NavLink>
        </div>

        <div className="col-span-3">
          <AnimatedImage
            src={Today}
            alt=""
            delay={0.1}
            className="mb-2 h-61 rounded-sm"
          />
          <Paragraph className="text-gray text-sm" delay={0.2}>
            Oh!Mumbai сегодня
          </Paragraph>
        </div>
        <div className="col-span-3">
          <AnimatedImage delay={0.2} className="mb-2 h-61 rounded-sm" />
          <Paragraph className="text-gray text-sm" delay={0.3}>
            шеф-повар Манджил
          </Paragraph>
        </div>

        <div className="col-span-6 flex flex-col gap-2">
          <H3Title className="pb-4" delay={0.1}>
            Ресторан Oh!Mumbai открывается вновь после смены владельцев и
            ребрендинга
          </H3Title>
          <Paragraph delay={0.2}>
            Новая концепция сочетания семейных традиций и современного подхода,
            интерьер в духе этно модерна и обновлённое меню, в сердце которого
            традиционные рецепты от семьи владельцев Тьяги
          </Paragraph>
          <Paragraph delay={0.3}>
            Для нас было важно сохранить команду, ведь ресторан работает на этом
            месте уже 13 лет. Шеф-повар из Индии Манджил продолжит работу в
            обновлённом Oh!Mumbai, а впервые в Россию он приехал также по
            приглашению Тьяги — работать в их первом ресторане Swagat. Индийский
            шеф будет отвечать за сохранение традиций, а над новой подачей
            работал приглашённый бренд-шеф
          </Paragraph>
          <Paragraph delay={0.4}>
            Располагаемся в сердце Адмиралтейского района, в историческом здании{" "}
            на пересечении набережной Мойки и переулка Гривцова, неподалёку от
            Красного моста и Исаакиевской площади
          </Paragraph>
          <Paragraph delay={0.5}>
            Oh! Mumbai открылся там ещё в 2013 году, а сейчас продолжит работу в
            обновлённом формате
          </Paragraph>
        </div>

        <AnimatedImage
          className="col-span-12 my-30 h-197 rounded-sm"
          delay={0}
        />
      </Section>
    </main>
  );
}

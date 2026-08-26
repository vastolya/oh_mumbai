"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Interior_05 from "@/public/interior_05.jpg";
import Interior_08 from "@/public/interior_08.jpg";
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
          О ресторане <br /> Oh!Mumbai
        </H1Title>
      </div>

      <Section className="text-chocolate! py-30">
        <H2Title className="text-chocolate col-span-4" delay={0}>
          Как домашний стол вырос в ресторан
        </H2Title>
        <div className="col-span-6 col-start-7 flex flex-col">
          <Paragraph className="text-gray pb-2" delay={0.1}>история</Paragraph>
          <Paragraph className="pb-6" delay={0.2}>
            Oh!Mumbai — семейный ресторан индийской кухни, интерпретированной{" "}
            <br />
            на современный лад. Традиционная индийская кухня перекликается
            с современной <br /> подачей, а за достоверность исполнения
            и гостеприимство отвечает семья <br /> владельцев с индийскими
            корнями
          </Paragraph>
          <Paragraph className="pb-2" delay={0.3}>
            Основательница проекта Шалини делится:
          </Paragraph>
          <Paragraph className="pb-6" delay={0.4}>
            «Первый индийский ресторан в нашей семье открыла мама больше
            двадцати <br /> лет назад. В какой‑то момент все гости, которых
            приглашал папа, перестали <br /> помещаться дома. Поэтому родители
            решили открыть ресторан Swagat, это «добро <br /> пожаловать»
            с хинди. Oh!Mumbai — наш второй проект, но мы не считаем себя <br />{" "}
            профессионалами, просто хотим делиться тем, как вкусно готовили
            в нашей семье. <br /> Год назад мамы не стало, и нам было важно
            сохранить все рецепты и дело, которым она когда‑то занималась»
          </Paragraph>
          <Paragraph className="pb-10" delay={0.5}>
            Oh! Mumbai — это чистая эмоция смешанных чувств, когда кто‑то <br />
            приезжает в один из городов Индии впервые. Совсем не обязательно{" "}
            <br />
            это Мумбай, но мы хотели передать эмоцию почти каждого, кто увидел{" "}
            <br />
            Индию своими глазами. Мы отходим от туристического и стереотипного{" "}
            <br />
            представления об Индии и передаём её аутентичный колорит вкусов{" "}
            <br />
            и сочетаний так, как это принято в семье владельцев ресторана
          </Paragraph>
        </div>

        <div className="col-span-3 col-start-7">
          <AnimatedImage
            src={Today}
            alt=""
            delay={0.1}
            className="mb-2 h-61 rounded-sm"
          />
          <Paragraph className="text-gray text-sm" delay={0.2}>Oh!Mumbai сегодня</Paragraph>
        </div>
        <div className="col-span-3">
          <AnimatedImage
            delay={0.2}
            className="mb-2 h-61 rounded-sm"
          />
          <Paragraph className="text-gray text-sm" delay={0.3}>шеф-повар Манджил</Paragraph>
        </div>

        <AnimatedImage
          className="col-span-12 my-30 h-197 rounded-sm"
          delay={0}
        />

        <div className="text-chocolate col-span-12 flex justify-between pb-12">
          <H2Title className="text-chocolate" delay={0}>
            Индийский ресторан в самом <br /> центре Санкт-Петербурга
          </H2Title>
          <NavLink arrow href="/interior">
            Смотреть интерьер
          </NavLink>
        </div>

        <div className="col-span-6">
          <AnimatedImage
            src={Interior_08}
            alt=""
            delay={0}
            className="mb-2 h-96 rounded-sm"
          />
          <Paragraph className="text-gray text-sm" delay={0.1}>Коммунальный стол</Paragraph>
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
            месте <br /> уже 13 лет. Шеф-повар из Индии Манджил продолжит работу
            в обновлённом <br /> Oh!Mumbai, а впервые в Россию он приехал
            также по приглашению Тьяги — <br /> работать в их первом ресторане
            Swagat. Индийский шеф будет отвечать <br /> за сохранение традиций,
            а над новой подачей работал приглашённый бренд-шеф
          </Paragraph>
          <Paragraph delay={0.4}>
            Располагаемся в сердце Адмиралтейского района, в историческом здании{" "}
            <br />
            на пересечении набережной Мойки и переулка Гривцова, неподалёку
            от Красного моста и Исаакиевской площади
          </Paragraph>
          <Paragraph delay={0.5}>
            Oh! Mumbai открылся там ещё в 2013 году, а сейчас <br /> продолжит
            работу в обновлённом формате
          </Paragraph>
        </div>
      </Section>
    </main>
  );
}

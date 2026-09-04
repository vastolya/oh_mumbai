import BookingButton from "@/components/booking/BookingButton";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import H1Title from "@/components/typography/H1Title";
import H3Title from "@/components/typography/H3Title";
import Image from "next/image";
import Link from "next/link";

import hero from "@/public/hero.jpg";
import TerracottaPattern from "@/components/ui/TerracottaPattern";
import H2Title from "@/components/typography/H2Title";
import NavLink from "@/components/ui/NavLink";
import Paragraph from "@/components/typography/Paragraph";
import HomeDishGrid from "@/components/menu/HomeDishGrid";
import AnimatedImage from "@/components/ui/AnimatedImage";

export default function Home() {
  return (
    <main>
      <section className="relative flex h-245 w-full">
        <Image
          src={hero}
          alt="Ресторан OH!MUMBAI"
          fill
          sizes="100vw"
          placeholder="blur"
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
        <Section
          as="div"
          grid={false}
          className="z-10 flex items-center justify-center"
        >
          <div className="flex flex-col text-center">
            <H3Title className="text-biege pb-4" delay={0.2}>
              Санкт-Петербург
            </H3Title>
            <H1Title className="text-biege pb-12" delay={0.4}>
              Oh!Mumbai <br /> ресторан индийской кухни
            </H1Title>
            <div className="flex justify-center gap-2">
              <BookingButton className="w-55">Забронировать</BookingButton>
              <Link href="/menu">
                <Button className="w-55" variant="secondary">
                  Меню
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </section>

      <section className="relative my-4 py-24">
        <TerracottaPattern className="text-seashell/20" />
      </section>

      <Section className="gap-y-8 pt-12">
        <div className="col-span-6 flex flex-col justify-between">
          <H2Title delay={0} className="text-biege">
            Воплощение индийского гостеприимства и семейных традиций
          </H2Title>
          <NavLink arrow href="/about" className="py-2.5">
            Подробнее
          </NavLink>
        </div>

        <div className="col-span-6">
          <Paragraph className="text-gray-light pb-2" delay={0.1}>
            ресторан
          </Paragraph>

          <Paragraph className="text-biege pb-6" delay={0.2}>
            Oh!Mumbai — это чистая эмоция первого знакомства с Индией. Мы не про
            туристические стереотипы, а про то, как на самом деле вкусно готовят
            в индийской семье
          </Paragraph>

          <Paragraph className="text-gray-light pb-2" delay={0.3}>
            Основательница проекта Шалини рассказывает
          </Paragraph>

          <Paragraph className="text-biege" delay={0.4}>
            «Первый индийский ресторан в нашей семье открыла мама больше
            двадцати <br /> лет назад. Когда гости перестали помещаться дома,
            родители открыли ресторан «Swagat» — «добро пожаловать». Oh!Mumbai —
            наш второй проект. Год назад <br /> мамы не стало, и для нас было
            важно сохранить все её рецепты и то дело, которым она жила»
          </Paragraph>
        </div>

        <AnimatedImage className="col-span-12 h-197 rounded-sm" />
      </Section>

      <Section className="py-30">
        <H2Title
          className="text-biege col-span-4 col-start-5 pb-12 text-center"
          delay={0}
        >
          Традиционная индийская кухня
        </H2Title>
        <H3Title
          className="text-biege col-span-6 col-start-4 text-center"
          delay={0.1}
        >
          Семья владельцев ресторана Тьяги сохраняют домашние рецепты. Шеф-повар
          Манджил из Дели уже много лет работает с нами — он приехал в Россию
          по приглашению семьи для первого ресторана «Swagat» и теперь отвечает
          за достоверность вкусов Oh!Mumbai
        </H3Title>
      </Section>

      <Section className="gap-y-0 pb-30">
        <div className="col-span-12 flex justify-between pb-12">
          <H2Title delay={0} className="text-biege">
            Меню
          </H2Title>
          <NavLink href="/menu" arrow>
            Перейти в раздел
          </NavLink>
        </div>
        <HomeDishGrid />
      </Section>
    </main>
  );
}

import BookingButton from "@/components/booking/BookingButton";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import H1Title from "@/components/typography/H1Title";
import H3Title from "@/components/typography/H3Title";
import Image from "next/image";

import hero from "@/public/hero.jpg";
import TerracottaPattern from "@/components/ui/TerracottaPattern";
import H2Title from "@/components/typography/H2Title";
import NavLink from "@/components/ui/NavLink";
import Paragraph from "@/components/typography/Paragraph";
import MenuCard from "@/components/menu/MenuCard";

export default function Home() {
  return (
    <main>
      <section className="relative flex h-245 w-full">
        {/* LCP-элемент: грузим сразу, без ленивой загрузки */}
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
            <H3Title className="pb-4 text-white">Санкт-Петербург</H3Title>
            <H1Title className="pb-12 text-white">
              Oh!Mumbai <br /> ресторан индийской кухни  {" "}
            </H1Title>
            <div className="flex justify-center gap-2">
              <BookingButton className="w-55">Забронировать</BookingButton>
              <Button className="w-55" variant="secondary">
                Меню
              </Button>
            </div>
          </div>
        </Section>
      </section>

      <section className="relative my-4 py-24">
        <TerracottaPattern className="text-seashell/20" />
      </section>

      <Section className="pt-12 pb-30">
        <div className="col-span-6 flex flex-col justify-between">
          <H2Title>
            Воплощение индийского <br /> гостеприимства <br /> и семейных
            традиций
          </H2Title>
          <NavLink arrow href="/about" className="py-2.5">
            Подробнее
          </NavLink>
        </div>

        <div className="col-span-6">
          <Paragraph className="text-gray pb-2">ресторан</Paragraph>

          <Paragraph className="pb-8">
            Oh!Mumbai — это чистая эмоция первого знакомства с Индией. <br />
            Мы не про туристические стереотипы, а про то, как на самом деле
            вкусно готовят <br /> в индийской семье
          </Paragraph>

          <H3Title className="pb-4">
            Основательница проекта <br /> Шалини рассказывает
          </H3Title>

          <Paragraph>
            «Первый индийский ресторан в нашей семье открыла мама больше
            двадцати лет назад. Когда гости перестали помещаться дома, родители
            открыли ресторан «Swagat» — «добро пожаловать». Oh!Mumbai —
            наш второй проект. Год назад мамы не стало, и для нас было важно
            сохранить все её рецепты и то дело, <br /> которым она жила»
          </Paragraph>
        </div>

        <div className="bg-gray col-span-12 mb-30 h-197 rounded-sm pt-12" />

        <div className="col-span-6">
          <H2Title className="pb-2">Традиционная индийская кухня</H2Title>
          <Paragraph>
            Семья владельцев ресторана Тьяги сохраняют домашние рецепты
          </Paragraph>
        </div>

        <div className="col-span-6">
          <Paragraph className="text-gray pb-2">Шеф-повар</Paragraph>
          <H3Title className="pb-4">Манджил</H3Title>
          <Paragraph>
            Приехал из Дели и уже много лет работает с нами — он приехал
            в Россию по приглашению семьи для первого ресторана «Swagat»
            и теперь отвечает за достоверность вкусов Oh!Mumbai
          </Paragraph>
        </div>
      </Section>

      <Section className="pb-30">
        <div className="col-span-12 flex justify-between pb-12">
          <H2Title>Меню</H2Title>
          <NavLink href="/menu" arrow>
            Перейти в раздел
          </NavLink>
        </div>
        <MenuCard name="Тандури чикен" spicy className="col-span-3" />
        <MenuCard name="Курма" nut delay={0.1} className="col-span-3" />
        <MenuCard name="Дал тадка" delay={0.2} className="col-span-3" />
        <MenuCard name="Панир тикка" spicy delay={0.3} className="col-span-3" />
      </Section>
    </main>
  );
}

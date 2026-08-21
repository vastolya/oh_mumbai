import { Suspense } from "react";
import H1Title from "@/components/typography/H1Title";
import MenuImageTabs from "@/components/menu/MenuImageTabs";
import Paragraph from "@/components/typography/Paragraph";
import Section from "@/components/layout/Section";

export default function MenuPage() {
  return (
    <main className="bg-biege">
      <Section>
        <H1Title className="text-chocolate col-span-12 py-12">Меню</H1Title>
        <Suspense fallback={null}>
          <MenuImageTabs />
        </Suspense>

        <Paragraph className="text-gray col-span-6 pt-8 pb-30 text-sm">
          Содержащаяся на сайте справочная информация об ассортименте
          алкогольной продукции не является предложением о приобретении и
          доводится до сведения посетителей в соответствии с требованиями закона
          РФ от 07.02.1992 № 2300-1 «О защите прав потребителей» и Федерального
          закона от 28.12.2009 № 38-ФЗ «Об основах государственного
          регулирования торговой деятельности в Российской Федерации с учетом
          ограничений, установленных Федеральным законом от 13.03.2006 № 38-ФЗ
          «О рекламе» (в редакции Федерального закона от 27.07.2012 № 119-ФЗ).
        </Paragraph>
      </Section>
    </main>
  );
}

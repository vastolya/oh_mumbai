import Button from "@/components/Button";
import H1Title from "@/components/H1Title";
import H3Title from "@/components/H3Title";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex w-full h-245 relative">
        <Image src={'/hero.jpg'} alt="Ресторан OH!MUMBAI" fill className=" object-cover"/>
        <section className="mx-auto flex  items-center justify-center">
          <div className="flex flex-col text-center z-10">
            <H3Title className="pb-4 text-white">Санкт-Петербург</H3Title>
            <H1Title className="pb-12 text-white">
              Oh!Mumbai <br /> ресторан индийской кухни  {" "}
            </H1Title>
            <div className="flex justify-center gap-2">
              <Button className="w-55">Забронировать</Button>
              <Button className="w-55" variant="secondary">
                Меню
              </Button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

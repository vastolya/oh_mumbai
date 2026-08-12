import Button from "@/components/Button";
import H1Title from "@/components/H1Title";
import H3Title from "@/components/H3Title";

export default function Home() {
  return (
    <main>
      <section className="flex w-full bg-[url('/hero.jpg')] object-contain">
        <section className="mx-auto flex h-225 items-center justify-center">
          <div className="flex flex-col text-center">
            <H3Title className="pb-4 text-white">Санкт-Петербург</H3Title>
            <H1Title className="pb-12 text-white">
              Oh!Mumbai <br /> ресторан индийской кухни  {" "}
            </H1Title>
            <div className="flex justify-center gap-2">
              <Button>Забронировать</Button>
              <Button variant="secondary">Меню</Button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

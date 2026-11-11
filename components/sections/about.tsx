import Image from "next/image";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const benefits = [
  ["Orientação inicial", "Um ponto de partida claro para sua rotina."],
  ["Treinos variados", "Alternativas para força, cardio e mobilidade."],
  ["Ambiente acolhedor", "Estrutura imaginada para diferentes níveis."],
  ["Rotina flexível", "Horários pensados para manhã e noite."],
];

export function About() {
  return (
    <section id="academia" aria-labelledby="about-title" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <SectionHeading id="about-title">Estrutura para quem está <span className="text-primary">começando</span> e para quem não para.</SectionHeading>
          <p className="leading-relaxed text-muted-foreground">Uma proposta fictícia de academia com orientação simples, treinos variados e espaço para evoluir no próprio ritmo.</p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.25fr_.75fr]">
          <figure className="relative min-h-[430px] overflow-hidden border">
            <Image src="/assets/gym-strength.png" alt="Atleta anônimo realizando agachamento em academia fictícia" fill sizes="(min-width:1024px) 65vw, 100vw" className="object-cover saturate-75 transition-all duration-500 hover:scale-[1.02] hover:saturate-100" />
          </figure>
          <div className="grid border-t">
            {benefits.map(([title, text]) => <div key={title} className="grid grid-cols-[28px_1fr] gap-3 border-b py-5"><Check className="mt-0.5 size-5 text-green-400" /><div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div>)}
          </div>
        </div>
        <figure className="group relative mt-4 aspect-video overflow-hidden border bg-black">
          <Image src="/assets/gym-class.png" alt="Grupo fictício em uma aula de treino funcional" fill sizes="(min-width: 1280px) 1152px, 100vw" className="object-cover object-center saturate-75 transition-[transform,filter] duration-500 group-hover:scale-[1.02] group-hover:saturate-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </figure>
      </div>
    </section>
  );
}

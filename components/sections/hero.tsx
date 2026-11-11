import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { contactUrl } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="hero-stage relative min-h-svh scroll-mt-20 lg:h-[135svh]">
      <div data-hero-sticky className="relative isolate flex min-h-svh items-end overflow-hidden pt-32 pb-12 lg:sticky lg:top-0 lg:h-svh lg:min-h-[680px] lg:pt-40 lg:pb-16">
        <div className="absolute inset-0 -z-30">
          <Image src="/assets/gym-hero.png" alt="Atleta em uma academia fictícia durante treino com halteres" fill priority sizes="100vw" className="hero-media object-cover object-[62%_center] saturate-75" />
        </div>
        <div className="absolute inset-0 -z-10 bg-background/72" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/50 via-background/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background/55 to-transparent" />
        <div className="hero-content relative mx-auto grid w-full max-w-6xl items-end gap-10 px-4 sm:px-6 lg:grid-cols-[1.45fr_.55fr]">
          <div className="hero-copy max-w-4xl">
          <p className="mb-6 text-xs font-bold tracking-[.12em] uppercase">Academia fictícia para demonstração</p>
          <h1 id="hero-title" className="font-display text-5xl font-black leading-[.86] tracking-[-.035em] uppercase sm:text-7xl lg:text-8xl">
            Seu treino.<br />Seu ritmo.<br /><span className="text-primary">Sua evolução.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Treino de força, cardio e aulas coletivas em uma experiência feita para a vida real.</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a href={contactUrl} className={buttonVariants({ className: "h-12 rounded-none px-6 font-bold" })}>Conhecer a academia <ArrowUpRight /></a>
            <a href="#planos" className={buttonVariants({ variant: "outline", className: "h-12 rounded-none border-foreground/35 bg-transparent px-6 font-bold" })}>Conhecer planos <ArrowDownRight /></a>
          </div>
          </div>
          <aside className="hero-aside hidden border bg-muted/90 p-6 backdrop-blur-md lg:block">
          <p className="text-xs font-bold tracking-[.12em] text-muted-foreground uppercase">Treino que cabe na vida real</p>
          <p className="mt-3 font-display text-2xl font-bold">Aberta de segunda a sexta, das 6h às 22h.</p>
          <a href="#contato" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold">Ver horários <ArrowDownRight className="size-4" /></a>
          </aside>
        </div>
      </div>
    </section>
  );
}

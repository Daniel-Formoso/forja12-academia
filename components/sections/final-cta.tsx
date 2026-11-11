import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { contactUrl } from "@/data/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center">
        <div><h2 id="cta-title" className="max-w-3xl font-display text-4xl font-black leading-none tracking-[-.035em] uppercase sm:text-5xl">Conheça a Forja 12.</h2><p className="mt-4 text-white/85">Uma identidade original para demonstrar o potencial deste projeto.</p></div>
        <a href={contactUrl} className={buttonVariants({ variant: "outline", className: "h-12 shrink-0 rounded-none border-white/60 bg-white px-6 font-bold text-primary hover:bg-transparent hover:text-white" })}>Ver conceito <ArrowUpRight /></a>
      </div>
    </section>
  );
}

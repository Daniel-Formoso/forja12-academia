import { Clock, Info, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contact-title" className="scroll-mt-20 bg-paper py-20 text-paper-foreground lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="contact-title" light>Um conceito pronto para <span className="text-primary">ganhar identidade.</span></SectionHeading>
        <p className="mt-6 max-w-2xl leading-relaxed text-paper-muted">Esta página apresenta uma academia imaginária. Nenhum endereço, contato, preço ou horário pertence a uma empresa real.</p>
        <div className="mt-12 grid gap-3 lg:grid-cols-[1.1fr_.9fr_1fr]">
          <article className="flex min-h-72 flex-col bg-background p-7 text-foreground"><MapPin className="size-6" /><div className="mt-auto"><p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Localização</p><h3 className="mt-3 font-display text-xl font-bold">Unidade demonstrativa<br />Rio de Janeiro - RJ</h3><p className="mt-6 text-xs text-muted-foreground">Sem endereço físico.</p></div></article>
          <article className="flex min-h-72 flex-col bg-background p-7 text-foreground"><Clock className="size-6" /><div className="mt-auto"><p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">Horários</p><h3 className="mt-3 font-display text-xl font-bold">{siteConfig.hours.weekdays}<br />{siteConfig.hours.saturday}</h3><p className="mt-6 text-xs text-muted-foreground">Informações fictícias.</p></div></article>
          <article className="flex min-h-72 flex-col bg-primary p-7 text-primary-foreground"><Info className="size-6" /><div className="mt-auto"><p className="text-xs font-bold tracking-widest uppercase">Projeto conceitual</p><h3 className="mt-3 font-display text-xl font-bold">Marca, conteúdo e imagens criados apenas para este protótipo.</h3></div></article>
        </div>
      </div>
    </section>
  );
}

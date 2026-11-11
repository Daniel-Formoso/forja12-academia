import { Separator } from "@/components/ui/separator";
import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div><SiteLogo /><p className="mt-3 text-xs text-muted-foreground">{siteConfig.tagline}.</p></div>
        <Separator className="my-7" />
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>Academia e informações inteiramente fictícias.</p>
          <p>Projeto demonstrativo - {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}

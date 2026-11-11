import { Info } from "lucide-react";
import { contactUrl } from "@/data/site";

export function PrototypeNotice() {
  return (
    <a
      href={contactUrl}
      aria-label="Ver informações sobre o protótipo"
      title="Sobre o protótipo"
      className="fixed right-4 bottom-5 z-40 inline-flex size-14 items-center justify-center bg-success text-white transition-[background-color,transform] duration-200 hover:-translate-y-1 hover:bg-success/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:right-6 sm:w-auto sm:px-5"
    >
      <Info aria-hidden="true" className="size-6" />
      <span className="ml-2 hidden text-sm font-bold sm:inline">Projeto fictício</span>
    </a>
  );
}

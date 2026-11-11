import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Modalities } from "@/components/sections/modalities";
import { Navbar } from "@/components/sections/navbar";
import { Plans } from "@/components/sections/plans";
import { SocialProof } from "@/components/sections/social-proof";
import { MotionController } from "@/components/motion/motion-controller";

export default function Page() {
  return (
    <>
      <MotionController />
      <a href="#conteudo" className="fixed top-3 left-3 z-[100] -translate-y-20 bg-foreground px-4 py-3 font-bold text-background transition-transform focus:translate-y-0">Ir para o conteúdo</a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <SocialProof />
        <About />
        <Modalities />
        <Plans />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

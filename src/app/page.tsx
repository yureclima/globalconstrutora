
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <div className="bg-primary/5 py-12 overflow-hidden relative">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-black mb-2 italic uppercase">Compromisso com cada etapa</h3>
              <p className="text-zinc-600">Acompanhamos sua obra com transparência e responsabilidade.</p>
            </div>
            <div className="flex gap-8 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
              <div className="shrink-0 text-center space-y-1">
                <p className="text-3xl font-black text-primary">Equipe</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Própria</p>
              </div>
              <div className="shrink-0 text-center space-y-1">
                <p className="text-3xl font-black text-primary">Preço</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Justo</p>
              </div>
              <div className="shrink-0 text-center space-y-1">
                <p className="text-3xl font-black text-primary">Prazo</p>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Garantido</p>
              </div>
            </div>
          </div>
        </div>
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

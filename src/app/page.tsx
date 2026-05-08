
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
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <div className="bg-[#0a0a0a] py-20 overflow-hidden relative border-y border-zinc-900">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="space-y-3">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white leading-none">
                Construindo <span className="text-primary italic font-light">Sonhos</span>
              </h3>
              <p className="text-zinc-500 font-light text-xl tracking-wide">Com qualidade, confiança e equipe própria.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full md:w-auto">
              {[
                { label: "Qualidade", value: "Garantida" },
                { label: "Confiança", value: "Total" },
                { label: "Entrega", value: "No Prazo" }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-2 border-b sm:border-b-0 sm:border-l border-zinc-900 sm:border-zinc-800 pb-8 sm:pb-0 sm:pl-8 first:border-0 first:pl-0">
                  <p className="text-3xl sm:text-4xl font-black text-primary uppercase tracking-tighter">{item.label}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">{item.value}</p>
                </div>
              ))}
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

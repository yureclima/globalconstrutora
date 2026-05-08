
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, HardHat } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-bg");
  const whatsappUrl = `https://wa.me/5562994156485?text=${encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.")}`;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image with Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Construção e Reforma em Goiânia"
          fill
          className="object-cover scale-110 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-[3000ms]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-5xl space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-none px-4 sm:px-6 py-2 text-primary text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] orange-glow">
            <HardHat className="h-4 w-4" />
            Qualidade & Confiança em Cada Etapa
          </div>
          
          <div className="space-y-6">
            <h1 className="text-[2.5rem] leading-[0.9] sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase premium-gradient-text">
              Construção, <br /> <span className="italic font-light text-primary">Reforma</span> e Lazer
            </h1>
            <p className="text-[9px] sm:text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] sm:tracking-[0.5em] ml-2">Goiânia e Região Metropolitana</p>
            
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-light border-l border-primary/40 pl-6 sm:pl-8 ml-2">
              A Global Construtora transforma projetos em realidade com equipe própria, preço justo e compromisso com a qualidade em cada etapa da obra.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 pt-8 items-center">
            <Button size="lg" className="w-full sm:w-auto orange-glow group h-16 px-8 sm:px-10 rounded-none text-[9px] sm:text-[10px] font-black tracking-[0.2em]" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-5 w-5 transition-transform group-hover:rotate-12" />
                SOLICITAR ORÇAMENTO PELO WHATSAPP
              </a>
            </Button>
            <div className="flex items-center gap-4 text-zinc-600">
              <div className="hidden sm:block w-12 h-[1px] bg-zinc-800" />
              <a href="#obras" className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors py-2">Ver Obras Realizadas</a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

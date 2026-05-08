
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const diferenciais = [
    "Equipe própria",
    "Preço justo",
    "Atendimento em Goiânia e região",
    "Compromisso com qualidade",
    "Acompanhamento da obra",
    "Responsabilidade na execução",
    "Soluções para construção, reforma e lazer"
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] relative overflow-hidden border border-white/5 orange-glow">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
                alt="Equipe Global Construtora"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            {/* Structural Marker */}
            <div className="absolute bottom-4 right-4 sm:-bottom-10 sm:-right-10 glass-panel p-6 sm:p-10 space-y-2 group-hover:scale-110 transition-transform duration-700">
              <p className="text-4xl sm:text-5xl font-black text-primary leading-none tracking-tighter">100%</p>
              <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 text-center">Equipe Própria</p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-8">
              <div className="h-[1px] w-24 bg-primary" />
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] premium-gradient-text">
                Compromisso <br /><span className="text-primary italic font-light">& Qualidade</span>
              </h2>
              <p className="text-zinc-300 text-lg sm:text-xl font-light leading-relaxed border-l border-primary/30 pl-6 sm:pl-8">
                A Global Construtora atua em Goiânia e região, oferecendo soluções completas para construção civil, reformas, edificações e áreas de lazer.
              </p>
            </div>

            <div className="space-y-8 text-zinc-400 font-light text-lg leading-relaxed">
              <p>
                Nosso compromisso é entregar obras bem executadas, com responsabilidade, qualidade e atenção aos detalhes. 
                Com equipe própria e atendimento próximo, acompanhamos cada etapa do serviço para que o cliente tenha mais segurança, clareza e confiança do início ao fim da obra.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {diferenciais.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-wider text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="h-16 px-10 tracking-[0.2em] orange-glow rounded-none" asChild>
                <a href="#contato">FALAR COM UM ESPECIALISTA</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

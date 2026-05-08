
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Área de Lazer",
    category: "Lazer & Piscina",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Reforma",
    category: "Residencial",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Construção",
    category: "Estrutural",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Acabamento",
    category: "Interiores",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
  },
];

export function Projects() {
  return (
    <section id="obras" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter premium-gradient-text leading-none">
              Nossas <br /> <span className="text-primary italic font-light">Obras</span>
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-xl border-l border-primary/30 pl-6 sm:pl-8">
              Confira alguns dos projetos entregues pela Global Construtora em Goiânia e região. Qualidade em cada detalhe.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-1 border border-white/5">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative h-[400px] md:h-[550px] overflow-hidden bg-zinc-900 border border-white/5"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover brightness-110 contrast-110 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity group-hover:opacity-70" />
              
              {/* Border Effect */}
              <div className="absolute inset-0 border-0 group-hover:border-[12px] border-primary/20 transition-all duration-500 pointer-events-none" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="space-y-3">
                  <div className="h-[1px] w-12 bg-primary group-hover:w-full transition-all duration-700" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="h-16 px-12 rounded-none tracking-[0.3em] text-[10px] font-black orange-glow" asChild>
            <a href="#contato">SOLICITAR ORÇAMENTO DA MINHA OBRA</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

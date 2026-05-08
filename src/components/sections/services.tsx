
import { Building2, Paintbrush, Waves, Layout, Hammer } from "lucide-react";

const services = [
  {
    title: "Construção civil",
    description: "Execução de obras residenciais e comerciais com planejamento, organização e qualidade.",
    icon: Building2,
  },
  {
    title: "Reformas",
    description: "Reformas completas ou parciais, com foco em funcionalidade, acabamento e valorização do imóvel.",
    icon: Paintbrush,
  },
  {
    title: "Áreas de lazer",
    description: "Construção e reforma de áreas de lazer, piscinas, espaços gourmet e ambientes externos.",
    icon: Waves,
  },
  {
    title: "Edificações",
    description: "Execução de estruturas e edificações conforme a necessidade do projeto.",
    icon: Layout,
  },
  {
    title: "Obras sob demanda",
    description: "Soluções personalizadas para diferentes necessidades dentro da construção civil.",
    icon: Hammer,
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter premium-gradient-text leading-none">
              Nossas <br /> <span className="text-primary italic font-light">Soluções</span>
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-xl border-l border-primary/30 pl-6 sm:pl-8">
              Atuamos em Goiânia e região com foco em entregar obras bem executadas, com responsabilidade e atenção aos detalhes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 sm:p-16 space-y-8 hover:bg-white/[0.04] transition-all duration-700 group relative overflow-hidden"
            >
              <div className="h-16 w-16 bg-primary/5 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed font-light text-base sm:text-lg">
                  {service.description}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

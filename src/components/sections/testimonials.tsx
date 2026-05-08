
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Roberto S.",
    role: "Proprietário Residencial",
    content: "Serviço bem feito, equipe responsável e entrega com qualidade. Recomendo a Global Construtora.",
  },
  {
    name: "Mariana F.",
    role: "Reforma Comercial",
    content: "Excelente atendimento em Goiânia. Minha reforma foi entregue no prazo e com um acabamento impecável. Equipe muito preparada.",
  },
  {
    name: "Carlos A.",
    role: "Área de Lazer",
    content: "Construíram minha área gourmet e piscina. O compromisso com a qualidade em cada etapa foi o diferencial.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter premium-gradient-text leading-none">
              O que nossos <br /> <span className="text-primary italic font-light">Clientes Dizem</span>
            </h2>
            <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-xl border-l border-primary/30 pl-6 sm:pl-8">
              A satisfação de quem confiou sua obra à nossa equipe e comprovou nosso compromisso com a qualidade.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 border border-zinc-900">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 backdrop-blur-sm p-8 sm:p-16 space-y-8 hover:bg-white/[0.04] transition-all duration-700 group relative border border-zinc-900/50 overflow-hidden"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-6 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <p className="text-xl text-zinc-400 font-light italic leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="pt-8 flex items-center gap-4 border-t border-white/5">
                <div className="h-12 w-12 rounded-none bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">{testimonial.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

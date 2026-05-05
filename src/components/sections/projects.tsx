
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Projects() {
  const projects = [
    { title: "Área de Lazer", category: "Gourmet & Piscina", id: "project-2" },
    { title: "Reforma Residencial", category: "Interior", id: "project-3" },
    { title: "Construção Comercial", category: "Estrutura", id: "project-4" },
    { title: "Acabamento Premium", category: "Detalhes", id: "project-1" },
  ];

  return (
    <section id="obras" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">Obras Realizadas</h2>
            <p className="text-zinc-600 max-w-lg">Confira alguns dos nossos projetos entregues com máxima qualidade em Goiânia e região.</p>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Galeria de Portfólio</p>
            <p className="text-zinc-400 text-sm">Transformando sonhos em estruturas sólidas</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => {
            const imgData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <div key={idx} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={imgData?.imageUrl || ""}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint="construction project"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-black">{project.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-400 italic">"Cada obra é tratada com seriedade e compromisso com o resultado final."</p>
        </div>
      </div>
    </section>
  );
}

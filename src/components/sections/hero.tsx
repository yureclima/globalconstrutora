
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, HardHat } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-bg");
  const whatsappUrl = `https://wa.me/5562994156485?text=${encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.")}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ""}
          alt="Construção Civil"
          fill
          className="object-cover"
          priority
          data-ai-hint="construction building"
        />
        <div className="absolute inset-0 bg-zinc-900/70 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1 text-primary text-sm font-bold uppercase tracking-wider">
            <HardHat className="h-4 w-4" />
            Excelência em Goiânia e Região
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            Construção, reforma e áreas de lazer em <span className="text-primary">Goiânia</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-300 max-w-xl leading-relaxed">
            A Global Construtora transforma projetos em realidade com equipe própria, preço justo e compromisso com a qualidade em cada etapa da obra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Solicitar orçamento
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full h-14 px-8 text-lg font-bold" asChild>
              <a href="#obras">Ver obras realizadas</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Geometric Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-primary/10 clip-path-polygon hidden lg:block" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }} />
    </section>
  );
}

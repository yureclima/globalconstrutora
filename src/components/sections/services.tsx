
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Building2, Hammer, Waves, Home, PencilRuler } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Construção Civil",
      description: "Execução de obras residenciais e comerciais com planejamento, organização e qualidade.",
      icon: <Building2 className="h-8 w-8 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === "service-construction")?.imageUrl
    },
    {
      title: "Reformas",
      description: "Reformas completas ou parciais, com foco em funcionalidade, acabamento e valorização do imóvel.",
      icon: <Hammer className="h-8 w-8 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === "service-renovation")?.imageUrl
    },
    {
      title: "Áreas de Lazer",
      description: "Construção e reforma de áreas de lazer, piscinas, espaços gourmet e ambientes externos.",
      icon: <Waves className="h-8 w-8 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === "service-leisure")?.imageUrl
    },
    {
      title: "Edificações",
      description: "Execução de estruturas e edificações conforme a necessidade do projeto.",
      icon: <Home className="h-8 w-8 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === "service-structure")?.imageUrl
    },
    {
      title: "Obras Sob Demanda",
      description: "Soluções personalizadas para diferentes necessidades dentro da construção civil.",
      icon: <PencilRuler className="h-8 w-8 text-primary" />,
      img: PlaceHolderImages.find(i => i.id === "project-1")?.imageUrl
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">Nossos Serviços</h2>
          <p className="text-zinc-600">Oferecemos soluções completas com a autoridade de quem entende de construção civil.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src={service.img || ""}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

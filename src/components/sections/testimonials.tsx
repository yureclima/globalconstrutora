
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "João Silva",
      text: "Serviço bem feito, equipe responsável e entrega com qualidade. Recomendo a Global Construtora.",
      rating: 5
    },
    {
      name: "Maria Oliveira",
      text: "Transformaram minha área de lazer. Equipe muito organizada e preço justo. Superou minhas expectativas.",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      text: "Profissionais comprometidos do início ao fim. A clareza no orçamento foi o diferencial.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">O Que Nossos Clientes Dizem</h2>
          <p className="text-zinc-600">A satisfação de quem construiu conosco é nossa maior propaganda.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <Card key={idx} className="border-none shadow-md hover:shadow-xl transition-shadow bg-white rounded-3xl p-4">
              <CardContent className="pt-6 space-y-4">
                <div className="flex text-primary">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <Quote className="h-10 w-10 text-primary/20 absolute -top-2 right-6" />
                <p className="text-zinc-600 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900">{review.name}</p>
                    <p className="text-xs text-zinc-500">Cliente Satisfeito</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

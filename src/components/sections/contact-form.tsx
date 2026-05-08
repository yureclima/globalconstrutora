
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Solicitação Enviada",
        description: "Nossa equipe entrará em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar sua solicitação.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { num: "01", title: "Chamada no WhatsApp", desc: "Você entra em contato conosco para uma primeira conversa." },
    { num: "02", title: "Entendemos sua Necessidade", desc: "Analisamos o que você precisa para construção ou reforma." },
    { num: "03", title: "Avaliação Técnica", desc: "Fazemos uma visita ou avaliação técnica detalhada." },
    { num: "04", title: "Envio de Orçamento", desc: "Apresentamos uma proposta clara e com preço justo." },
    { num: "05", title: "Execução da Obra", desc: "Iniciamos os trabalhos com equipe própria e qualidade." },
  ];

  const whatsappUrl = `https://wa.me/5562994156485?text=${encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.")}`;

  return (
    <section id="contato" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-zinc-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="h-[1px] w-24 bg-primary" />
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] premium-gradient-text">
                Quer tirar sua <br /><span className="text-primary italic font-light">Obra do Papel?</span>
              </h2>
              <p className="text-zinc-400 text-lg sm:text-xl md:text-2xl font-light leading-relaxed max-w-lg border-l border-primary/30 pl-6 sm:pl-8">
                Fale com a Global Construtora e solicite um orçamento para construção, reforma ou área de lazer em Goiânia e região.
              </p>
              <div className="pt-4">
                <Button size="lg" className="h-16 px-10 orange-glow rounded-none group" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-3 h-5 w-5 transition-transform group-hover:scale-110" />
                    CHAMAR NO WHATSAPP
                  </a>
                </Button>
              </div>
            </div>

              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">Como Funciona</h3>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6 items-start group">
                    <span className="text-xl sm:text-2xl font-black text-primary group-hover:scale-110 transition-transform">{step.num}</span>
                    <div className="space-y-1">
                      <p className="text-white font-bold uppercase tracking-wider text-xs sm:text-base">{step.title}</p>
                      <p className="text-zinc-400 text-[11px] sm:text-sm font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>

          <div className="glass-panel p-6 sm:p-12 md:p-16 relative">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
            <div className="mb-12">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Solicitar Orçamento</h3>
              <p className="text-zinc-500 text-sm mt-2">Preencha o formulário e retornaremos em até 2 horas úteis.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Seu Nome</label>
                <Input 
                  placeholder="Seu nome completo" 
                  required 
                  className="h-14 bg-white/[0.02] border-zinc-800 rounded-none focus:border-primary transition-all text-white placeholder:text-zinc-700"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">WhatsApp</label>
                  <Input 
                    placeholder="(62) 99999-9999" 
                    required 
                    className="h-14 bg-white/[0.02] border-zinc-800 rounded-none focus:border-primary transition-all text-white placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Cidade</label>
                  <Input 
                    placeholder="Ex: Goiânia" 
                    required 
                    className="h-14 bg-white/[0.02] border-zinc-800 rounded-none focus:border-primary transition-all text-white placeholder:text-zinc-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Tipo de Serviço</label>
                <Input 
                  placeholder="Ex: Reforma / Construção / Lazer" 
                  required 
                  className="h-14 bg-white/[0.02] border-zinc-800 rounded-none focus:border-primary transition-all text-white placeholder:text-zinc-700"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 ml-1">Mensagem</label>
                <Textarea 
                  placeholder="Conte-nos brevemente sobre seu projeto..." 
                  className="min-h-[120px] bg-white/[0.02] border-zinc-800 rounded-none focus:border-primary transition-all text-white placeholder:text-zinc-700"
                  required 
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-16 text-xs font-black tracking-[0.3em] orange-glow" 
                disabled={loading}
              >
                {loading ? "ENVIANDO..." : "ENVIAR SOLICITAÇÃO"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

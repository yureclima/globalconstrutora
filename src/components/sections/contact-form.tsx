
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato via WhatsApp em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const whatsappUrl = `https://wa.me/5562994156485?text=${encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.")}`;

  return (
    <section id="contato" className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black">Quer tirar sua obra do papel?</h2>
              <p className="text-zinc-400 text-lg">Fale com a Global Construtora e solicite um orçamento para construção, reforma ou área de lazer em Goiânia e região.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">WhatsApp</p>
                  <p className="text-xl font-bold">(62) 99415-6485</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">E-mail</p>
                  <p className="text-xl font-bold">globalservicewf@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Área de Atendimento</p>
                  <p className="text-xl font-bold">Goiânia e Região Metropolitana</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 h-16 px-12 rounded-full text-lg font-black shadow-2xl shadow-primary/20" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                CHAMAR NO WHATSAPP
              </a>
            </Button>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl text-zinc-900 shadow-2xl border border-zinc-200">
            <h3 className="text-2xl font-black mb-8">Formulário de Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500">Nome Completo</label>
                  <Input required className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" placeholder="Ex: João da Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500">WhatsApp</label>
                  <Input required className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" placeholder="(62) 99999-9999" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500">Cidade</label>
                  <Input required className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" placeholder="Sua cidade" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500">Tipo de Serviço</label>
                  <Input required className="bg-zinc-50 border-zinc-200 h-12 rounded-xl" placeholder="Ex: Reforma de piscina" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500">Sua Mensagem</label>
                <Textarea required className="bg-zinc-50 border-zinc-200 min-h-[120px] rounded-xl" placeholder="Descreva brevemente o que você precisa..." />
              </div>
              <Button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800 text-white h-14 rounded-xl font-bold" disabled={loading}>
                {loading ? "Enviando..." : "SOLICITAR ORÇAMENTO"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

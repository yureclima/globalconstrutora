
"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappNumber = "5562994156485";
  const message = encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end gap-3 group">
      <div className="bg-zinc-950/80 backdrop-blur-md border border-white/10 px-4 py-2 text-[8px] font-black uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 orange-glow rounded-full">
        Solicite um Orçamento
      </div>
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl orange-glow transition-all duration-500 hover:scale-110 active:scale-95 p-0"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
          <MessageCircle className="!w-8 !h-8 text-white" />
        </a>
      </Button>
    </div>
  );
}

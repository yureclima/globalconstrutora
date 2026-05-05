
"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappNumber = "5562994156485";
  const message = encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full w-16 h-16 shadow-2xl bg-green-500 hover:bg-green-600 border-4 border-white dark:border-zinc-900 transition-transform hover:scale-110"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="!w-8 !h-8 text-white" />
        </a>
      </Button>
    </div>
  );
}

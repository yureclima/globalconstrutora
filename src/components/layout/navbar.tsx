
"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Obras", href: "#obras" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ];

  const whatsappNumber = "5562994156485";
  const message = encodeURIComponent("Olá, vim pelo site da Global Construtora e gostaria de solicitar um orçamento.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-2xl overflow-x-hidden">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
          <div className="bg-primary p-1 sm:p-2 rounded-none transition-transform group-hover:skew-x-2 orange-glow flex items-center justify-center">
            <Image 
              src="/images/logo-global.svg" 
              alt="Global Construtora" 
              width={140} 
              height={56} 
              className="h-10 sm:h-12 w-auto brightness-0 invert scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base sm:text-lg text-white uppercase tracking-[0.2em] leading-none">Construtora</span>
            <span className="text-[8px] sm:text-[9px] text-zinc-500 font-black uppercase tracking-[0.4em] mt-1">Goiânia e Região</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-primary transition-colors relative group/item"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover/item:w-full" />
            </Link>
          ))}
          <Button className="rounded-none h-12 px-10 orange-glow text-[10px] font-black tracking-[0.2em]" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              SOLICITAR ORÇAMENTO
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/5 rounded-none h-12 w-12">
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-zinc-950 border-zinc-900 flex flex-col pt-20">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-tighter py-6 border-b border-white/5 text-white hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pb-12">
                <Button className="w-full rounded-none h-16 text-[10px] font-black tracking-[0.2em] orange-glow" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    SOLICITAR ORÇAMENTO
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

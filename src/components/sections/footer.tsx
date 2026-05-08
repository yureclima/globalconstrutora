
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 md:py-24 border-t border-zinc-900 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-20">
          <div className="md:col-span-2 space-y-10 text-center md:text-left flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="bg-primary p-2 rounded-none transition-transform group-hover:skew-x-2 orange-glow flex items-center justify-center">
                <Image 
                  src="/images/logo-global.svg" 
                  alt="Global Construtora" 
                  width={160} 
                  height={64} 
                  className="h-12 md:h-16 w-auto brightness-0 invert scale-110"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-xl text-white uppercase tracking-[0.2em] leading-none">Construtora</span>
                <span className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] mt-1">Goiânia e Região</span>
              </div>
            </Link>
            <p className="text-zinc-400 max-w-sm text-lg sm:text-xl font-light leading-relaxed border-l-0 md:border-l md:border-primary/30 pl-0 md:pl-8">
              A Global Construtora transforma projetos em realidade com equipe própria, preço justo e compromisso com a qualidade em cada etapa da obra.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Instagram />, href: "https://instagram.com/global_construtora" },
                { icon: <Mail />, href: "mailto:globalservicewf@gmail.com" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-14 h-14 glass-panel flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
                  <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-center md:text-left">
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-primary border-b border-zinc-900 pb-4 inline-block md:block">Navegação</h4>
            <ul className="grid gap-5 text-zinc-500 uppercase tracking-widest text-[10px] font-black">
              <li><Link href="#sobre" className="hover:text-primary transition-colors">Sobre</Link></li>
              <li><Link href="#servicos" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="#obras" className="hover:text-primary transition-colors">Obras</Link></li>
              <li><Link href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</Link></li>
              <li><Link href="#contato" className="hover:text-primary transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div className="space-y-8 text-center md:text-left">
            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-primary border-b border-zinc-900 pb-4 inline-block md:block">Atendimento</h4>
            <div className="space-y-6 md:space-y-8 text-zinc-400 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-5 group w-full md:w-auto justify-center md:justify-start">
                <div className="h-12 w-12 glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors break-all">(62) 99415-6485</span>
              </div>
              <div className="flex items-center gap-5 group w-full md:w-auto justify-center md:justify-start">
                <div className="h-12 w-12 glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-xs md:text-sm font-medium text-zinc-500 group-hover:text-white transition-colors break-all">globalservicewf@gmail.com</span>
              </div>
              <div className="flex items-center gap-5 group w-full md:w-auto justify-center md:justify-start">
                <div className="h-12 w-12 glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Goiânia e Região</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-24 pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-center text-zinc-700 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em]">
          <p>Global Construtora © 2026. Todos os direitos reservados.</p>
          <p className="text-zinc-800">Construindo Sonhos com Qualidade</p>
        </div>
      </div>
    </footer>
  );
}

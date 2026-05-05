
import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <span className="text-primary-foreground font-black text-2xl italic leading-none">GLOBAL</span>
              </div>
              <span className="font-bold text-xl uppercase tracking-tighter">Construtora</span>
            </Link>
            <p className="text-zinc-500 max-w-sm">
              Construindo sonhos com qualidade e confiança em Goiânia e região. Sua obra com equipe própria e compromisso real.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/global_construtora" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:globalservicewf@gmail.com" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-black uppercase tracking-widest text-sm text-primary">Navegação</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><Link href="#sobre" className="hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="#obras" className="hover:text-white transition-colors">Obras Realizadas</Link></li>
              <li><Link href="#contato" className="hover:text-white transition-colors">Orçamentos</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black uppercase tracking-widest text-sm text-primary">Atendimento</h4>
            <div className="space-y-4 text-zinc-400">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(62) 99415-6485</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>globalservicewf@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm italic">
                <span>Goiânia e Região Metropolitana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900 text-center text-zinc-600 text-sm">
          <p>Global Construtora © 2026. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

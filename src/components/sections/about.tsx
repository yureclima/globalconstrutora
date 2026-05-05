
export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight">
              Construindo sonhos com qualidade e confiança
            </h2>
            <div className="w-20 h-2 bg-primary" />
            <p className="text-lg text-zinc-600 leading-relaxed">
              A Global Construtora atua em Goiânia e região, oferecendo soluções completas para construção civil, reformas, edificações e áreas de lazer. Nosso compromisso é entregar obras bem executadas, com responsabilidade, qualidade e atenção aos detalhes.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              Com equipe própria e atendimento próximo, acompanhamos cada etapa do serviço para que o cliente tenha mais segurança, clareza e confiança do início ao fim da obra.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-100 p-8 rounded-2xl space-y-2 border-l-4 border-primary">
              <span className="text-4xl font-black text-primary">100%</span>
              <p className="font-bold text-zinc-800">Compromisso</p>
              <p className="text-sm text-zinc-500">Qualidade garantida em cada detalhe.</p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-2xl space-y-2 text-white mt-8">
              <span className="text-4xl font-black text-primary">Gyn</span>
              <p className="font-bold">Goiânia e Região</p>
              <p className="text-sm text-zinc-400">Atendimento local especializado.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

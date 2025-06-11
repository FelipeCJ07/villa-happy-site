import React from 'react';

interface NivelEnsinoProps {
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
}

const NivelCard: React.FC<NivelEnsinoProps> = ({ titulo, subtitulo, descricao, icone }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover border-t-4 border-villa-orange">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-villa-blue text-white">
        <span className="text-2xl">{icone}</span>
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">{titulo}</h3>
      <h4 className="text-villa-orange text-center mb-4">{subtitulo}</h4>
      <p className="text-gray-600 text-center">{descricao}</p>
      <div className="mt-6 text-center">
        <a href={`/niveis/${titulo.toLowerCase().replace(/\s/g, '-')}`} className="btn-outline inline-block">
          Veja +
        </a>
      </div>
    </div>
  );
};

const NiveisEnsino: React.FC = () => {
  const niveis = [
    {
      titulo: "Berçário",
      subtitulo: "Ideal Para O Seu Bebê",
      descricao: "É o momento das descobertas, onde tudo se torna novo. Ambiente seguro e acolhedor para o desenvolvimento dos bebês.",
      icone: "👶"
    },
    {
      titulo: "Educação Infantil",
      subtitulo: "Alfabetização",
      descricao: "É o momento de desenvolvimento de sua identidade, nessa fase entra o processo de alfabetização através do método fonético.",
      icone: "📚"
    },
    {
      titulo: "Ensino Fundamental",
      subtitulo: "Aprendizado Contínuo",
      descricao: "Fase de consolidação do conhecimento e desenvolvimento de habilidades sociais, cognitivas e emocionais.",
      icone: "🎓"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title centered text-center mb-12">Níveis de Ensino</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {niveis.map((nivel, index) => (
            <NivelCard key={index} {...nivel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NiveisEnsino;

import React from 'react';

const AtividadesExtras: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title centered text-center mb-12">Atividades Extras</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-villa-blue relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-2">🎨</div>
                  <h3 className="text-2xl font-bold">Artes</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Desenvolvimento da criatividade e expressão artística através de diversas técnicas e materiais.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Pintura e Desenho
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Modelagem
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Artesanato
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-villa-green relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-2">🎾</div>
                  <h3 className="text-2xl font-bold">Esportes</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Atividades físicas que promovem saúde, coordenação motora e trabalho em equipe.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Futebol
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Tênis
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Natação
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-villa-yellow relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-2">🎵</div>
                  <h3 className="text-2xl font-bold">Música</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Desenvolvimento da sensibilidade musical, ritmo e coordenação através de instrumentos e canto.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Iniciação Musical
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Coral
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Instrumentos
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
            <div className="h-48 bg-villa-orange relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <div className="text-5xl mb-2">🧩</div>
                  <h3 className="text-2xl font-bold">Xadrez</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Desenvolvimento do raciocínio lógico, concentração e estratégia através do jogo de xadrez.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Iniciação ao Xadrez
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Estratégias
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-villa-orange mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Torneios Internos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtividadesExtras;

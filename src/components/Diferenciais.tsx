import React from 'react';

const Diferenciais: React.FC = () => {
  return (
    <section className="py-16 bg-villa-orange text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title centered text-center text-white mb-12">Diferenciais - Villa Happy</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8">
            Sistema Mackenzie de Ensino (SME) foi criado com o propósito de elaborar materiais didáticos de excelência que auxiliem os educadores comprometidos com os princípios e valores cristãos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-villa-yellow rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-villa-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Equipe Qualificada</h3>
              </div>
              <p>Professores e auxiliares com formação específica e constante atualização pedagógica.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-villa-yellow rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-villa-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Infraestrutura Moderna</h3>
              </div>
              <p>Espaços planejados para o desenvolvimento integral, com segurança e conforto.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-villa-yellow rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-villa-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Material Didático Exclusivo</h3>
              </div>
              <p>Sistema Mackenzie de Ensino com conteúdo de excelência e valores cristãos.</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <div className="bg-villa-yellow rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-villa-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Ambiente Acolhedor</h3>
              </div>
              <p>Clima familiar e afetuoso, onde cada criança é valorizada em sua individualidade.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/sobre" className="btn-secondary inline-block">
              Conheça +
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;

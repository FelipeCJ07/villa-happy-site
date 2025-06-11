import React from 'react';

const Galeria: React.FC = () => {
  // Imagens de exemplo para a galeria
  const imagens = [
    {
      url: 'https://images.unsplash.com/photo-1566454419290-57a0af3a0b6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      titulo: 'Atividades em sala'
    },
    {
      url: 'https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      titulo: 'Brincadeiras'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      titulo: 'Leitura'
    },
    {
      url: 'https://images.unsplash.com/photo-1564429097439-e400382dc893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      titulo: 'Esportes'
    },
    {
      url: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      titulo: 'Música'
    },
    {
      url: 'https://images.unsplash.com/photo-1610465299993-e6675c9f9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      titulo: 'Arte'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h2 className="section-title">Fotos</h2>
            <p className="text-gray-600 mt-4 max-w-2xl">
              Conheça um pouco do dia a dia da Villa Happy através das nossas fotos.
              Momentos especiais de aprendizado, diversão e crescimento.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a href="/fotos" className="btn-outline inline-block">
              Ver Todas as Fotos
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagens.map((imagem, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg card-hover">
              <div className="relative h-64">
                <img 
                  src={imagem.url} 
                  alt={imagem.titulo} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                  <h3 className="text-white font-bold text-lg p-4">{imagem.titulo}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;

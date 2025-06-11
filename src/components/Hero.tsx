import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-villa-blue py-16 md:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-90"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Educação que <span className="text-villa-yellow">transforma</span> o futuro
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Uma escola moderna, com ótima estrutura, berçário projetado por especialistas, 
              educação infantil e fundamental I de excelência.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/matricula" className="btn-primary text-center">
                Reserva de Matrícula
              </a>
              <a href="/sobre" className="btn-outline bg-white text-center">
                Conheça Nossa Escola
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white p-3 rounded-lg shadow-xl transform rotate-3 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80" 
                  alt="Crianças estudando" 
                  className="rounded w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-villa-yellow p-4 rounded-lg shadow-lg transform -rotate-3">
                <p className="font-bold text-villa-orange text-lg">Sistema Mackenzie de Ensino</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

const Contato: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title centered text-center mb-12">Contate-Nos</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-villa-orange">Envie uma Mensagem</h3>
              
              <form>
                <div className="mb-4">
                  <label htmlFor="nome" className="block text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="nome" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-villa-orange"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-villa-orange"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="telefone" className="block text-gray-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-villa-orange"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="mensagem" className="block text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    id="mensagem" 
                    rows={5}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-villa-orange"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-villa-orange">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-villa-blue rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Endereço</h4>
                    <p className="text-gray-600">
                      R. José Felix de Oliveira, 1624<br />
                      Granja Viana - CEP: 06708-415<br />
                      Cotia - São Paulo – SP
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-villa-green rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefones</h4>
                    <p className="text-gray-600">
                      (11) 4612-2918<br />
                      (11) 95237-2588
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-villa-yellow rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">E-mail</h4>
                    <p className="text-gray-600">
                      secretaria@escolavillahappy.com.br
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-villa-orange rounded-full p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 7h - 19h
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8649337037236!2d-46.87291092392006!3d-23.5807029789204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0364c8a98d59%3A0x5d5fa6a7d03b8813!2sR.%20Jos%C3%A9%20Felix%20de%20Oliveira%2C%201624%20-%20Granja%20Viana%2C%20Cotia%20-%20SP%2C%2006708-415!5e0!3m2!1spt-BR!2sbr!4v1685488892010!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Escola Villa Happy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;

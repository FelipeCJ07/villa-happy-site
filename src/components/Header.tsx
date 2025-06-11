import React, { useState } from 'react';
import logo from '../assets/logo_villa_happy.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Escola Villa Happy" className="h-16 md:h-20" />
            </a>
            <button 
              className="md:hidden text-villa-orange focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row mt-4 md:mt-0 w-full md:w-auto`}>
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-2 md:space-y-0">
              <li>
                <a href="/" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Home</a>
              </li>
              <li>
                <a href="/admissao" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Admissão</a>
              </li>
              <li>
                <a href="/sobre" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Sobre Nós</a>
              </li>
              <li>
                <a href="/curriculo" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Currículo</a>
              </li>
              <li>
                <a href="/vida-escolar" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Vida Escolar</a>
              </li>
              <li>
                <a href="/fotos" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Fotos</a>
              </li>
              <li>
                <a href="/contato" className="nav-link text-gray-800 hover:text-villa-orange font-semibold">Contato</a>
              </li>
            </ul>
            <div className="mt-4 md:mt-0 md:ml-6">
              <a href="/matricula" className="btn-primary inline-block">Reserva de Matrícula</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

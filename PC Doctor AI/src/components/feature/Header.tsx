
import { useState } from 'react';
import Button from '../base/Button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-lg bg-white p-1">
              <img 
                src="https://i.postimg.cc/QF2MR9S1/logo.png" 
                alt="PC Doctor AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900" style={{ fontFamily: '"Poppins", sans-serif' }}>
                PC Doctor AI
              </h1>
              <p className="text-xs text-blue-600 font-medium hidden sm:block">Expertos en Tecnología</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Servicios
            </a>
            <a href="#productos" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Productos
            </a>
            <a href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Sobre Nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:block">
            <Button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
            >
              <i className="ri-phone-line mr-1 sm:mr-2"></i>
              <span className="hidden sm:inline">Consulta Gratis</span>
              <span className="sm:hidden">Consulta</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl sm:text-2xl text-gray-700`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-gray-100 bg-white">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2 flex items-center">
                <i className="ri-home-line mr-3 text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                Inicio
              </a>
              <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2 flex items-center">
                <i className="ri-tools-line mr-3 text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                Servicios
              </a>
              <a href="#productos" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2 flex items-center">
                <i className="ri-computer-line mr-3 text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                Productos
              </a>
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2 flex items-center">
                <i className="ri-team-line mr-3 text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                Sobre Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium py-2 flex items-center">
                <i className="ri-phone-line mr-3 text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                Contacto
              </a>
              <div className="pt-4">
                <Button 
                  onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
                >
                  <i className="ri-phone-line mr-2"></i>
                  Consulta Gratis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

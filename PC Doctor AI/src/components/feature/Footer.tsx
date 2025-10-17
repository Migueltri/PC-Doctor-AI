
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-lg bg-white p-1">
                <img 
                  src="https://i.postimg.cc/QF2MR9S1/logo.png" 
                  alt="PC Doctor AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: '"Poppins", sans-serif' }}>
                  PC Doctor AI
                </h3>
                <p className="text-sm text-blue-400 font-medium">Expertos en Tecnología</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              Especialistas en reparación, mantenimiento y optimización de equipos informáticos. Brindamos soluciones tecnológicas profesionales con la más alta calidad y confianza.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <i className="ri-facebook-fill text-base sm:text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <i className="ri-twitter-fill text-base sm:text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <i className="ri-instagram-fill text-base sm:text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors cursor-pointer shadow-lg">
                <i className="ri-linkedin-fill text-base sm:text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 block flex items-center">
                  <i className="ri-home-line mr-2 text-blue-400 w-4 h-4 flex items-center justify-center"></i>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 block flex items-center">
                  <i className="ri-tools-line mr-2 text-blue-400 w-4 h-4 flex items-center justify-center"></i>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#productos" className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 block flex items-center">
                  <i className="ri-computer-line mr-2 text-blue-400 w-4 h-4 flex items-center justify-center"></i>
                  Productos
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="text-gray-300 hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 block flex items-center">
                  <i className="ri-team-line mr-2 text-blue-400 w-4 h-4 flex items-center justify-center"></i>
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-white">Contacto</h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-3 mt-0.5 flex-shrink-0">
                  <i className="ri-map-pin-line text-xs text-white"></i>
                </div>
                <span className="leading-relaxed">C. del Ferial, 48, 19002 Guadalajara</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-3 flex-shrink-0">
                  <i className="ri-phone-line text-xs text-white"></i>
                </div>
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full mr-3 flex-shrink-0">
                  <i className="ri-mail-line text-xs text-white"></i>
                </div>
                <span>pcdoctorai@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © 2025 PC Doctor AI. Todos los derechos reservados. • 
            <a href="https://readdy.ai/?origin=logo" className="text-blue-400 hover:text-blue-300 transition-colors ml-1">
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

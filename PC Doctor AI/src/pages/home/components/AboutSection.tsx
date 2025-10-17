
export default function AboutSection() {
  const stats = [
    { number: '500+', label: 'Equipos Reparados', icon: 'ri-tools-line' },
    { number: '98%', label: 'Satisfacción del Cliente', icon: 'ri-heart-line' },
    { number: '5+', label: 'Años de Experiencia', icon: 'ri-time-line' },
    { number: '24/7', label: 'Soporte Disponible', icon: 'ri-customer-service-2-line' }
  ];

  const features = [
    {
      icon: 'ri-award-line',
      title: 'Certificación Profesional',
      description: 'Técnicos certificados con amplia experiencia en reparación y mantenimiento de equipos informáticos.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Garantía de Calidad',
      description: 'Todos nuestros servicios incluyen garantía extendida y soporte post-reparación.'
    },
    {
      icon: 'ri-speed-line',
      title: 'Servicio Rápido',
      description: 'Diagnóstico inmediato y reparación en tiempo récord para minimizar tu tiempo de inactividad.'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Precios Competitivos',
      description: 'Tarifas justas y transparentes sin costos ocultos. Presupuesto gratuito sin compromiso.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-6">
              <i className="ri-information-line text-blue-600 mr-2"></i>
              <span className="text-blue-600 font-semibold">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
              Expertos en
              <span className="block text-blue-600">Tecnología Informática</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              En PC Doctor AI somos especialistas en brindar soluciones tecnológicas integrales. Con años de experiencia en el sector, nos dedicamos a mantener tus equipos funcionando de manera óptima.
            </p>
            
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${feature.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-right-line mr-2"></i>
              Conoce Más
            </button>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20computer%20technician%20expert%20working%20in%20modern%20technology%20repair%20workshop%2C%20advanced%20diagnostic%20equipment%2C%20professional%20tools%2C%20clean%20organized%20workspace%2C%20expert%20hands%20repairing%20motherboard%2C%20high-tech%20environment%2C%20professional%20lighting%2C%20detailed%20close-up%20of%20technical%20work%2C%20blue%20color%20scheme&width=600&height=700&seq=about-tech1&orientation=portrait"
                alt="PC Doctor AI - Equipo profesional"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <i className={`${stat.icon} text-blue-600`}></i>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-2xl"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-cyan-500/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

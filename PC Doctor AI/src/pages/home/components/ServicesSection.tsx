
export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-tools-line',
      title: 'Reparación de Equipos',
      description: 'Diagnóstico y reparación profesional de computadoras, laptops y dispositivos móviles con garantía de calidad.',
      features: ['Diagnóstico gratuito', 'Reparación en 24-48h', 'Garantía de 6 meses', 'Piezas originales']
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Mantenimiento Preventivo',
      description: 'Servicios de mantenimiento programado para mantener tus equipos funcionando de manera óptima.',
      features: ['Limpieza profunda', 'Actualización de software', 'Optimización del sistema', 'Backup de datos']
    },
    {
      icon: 'ri-virus-line',
      title: 'Eliminación de Virus',
      description: 'Detección y eliminación completa de malware, virus y amenazas de seguridad informática.',
      features: ['Análisis completo', 'Eliminación garantizada', 'Protección antivirus', 'Recuperación de datos']
    },
    {
      icon: 'ri-database-2-line',
      title: 'Recuperación de Datos',
      description: 'Recuperación profesional de archivos perdidos, discos dañados y sistemas corruptos.',
      features: ['Recuperación avanzada', 'Discos duros dañados', 'Archivos eliminados', 'Sistemas corruptos']
    },
    {
      icon: 'ri-wifi-line',
      title: 'Configuración de Redes',
      description: 'Instalación y configuración de redes domésticas y empresariales para máximo rendimiento.',
      features: ['Redes WiFi', 'Configuración segura', 'Optimización de velocidad', 'Soporte técnico']
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Soporte Técnico',
      description: 'Asistencia técnica remota y presencial para resolver cualquier problema informático.',
      features: ['Soporte 24/7', 'Asistencia remota', 'Consultoría técnica', 'Capacitación de usuarios']
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-6 py-3 mb-6">
            <i className="ri-service-line text-blue-600 mr-2"></i>
            <span className="text-blue-600 font-semibold">Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: '"Poppins", sans-serif' }}>
            Soluciones Tecnológicas
            <span className="block text-blue-600">Profesionales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios especializados en tecnología informática con los más altos estándares de calidad y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-green-600 text-xs"></i>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button 
                  onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                >
                  Solicitar Servicio
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: '"Poppins", sans-serif' }}>
              ¿Necesitas ayuda con tu equipo?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Contáctanos ahora y recibe una consulta gratuita
            </p>
            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line mr-2"></i>
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

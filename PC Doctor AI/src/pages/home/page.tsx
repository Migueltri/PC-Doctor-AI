
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import PCDoctorAI from '../../components/ai/PCDoctorAI';
import AppointmentScheduler from '../../components/ai/AppointmentScheduler';

export default function Home() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const openReadyAgent = () => {
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) {
      widget.click();
    }
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <HeroSection />
        
        {/* PC Doctor AI Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/10 rounded-full"
            />
            <motion.div
              animate={{ 
                y: [-20, 20, -20]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-8"
              >
                <motion.div 
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-full mr-6 border border-white/30"
                >
                  <i className="ri-robot-2-line text-5xl text-white"></i>
                </motion.div>
                <div className="text-left">
                  <h2 className="text-5xl font-bold text-white mb-2">PC Doctor AI</h2>
                  <p className="text-2xl text-blue-200">Técnico Virtual Inteligente 24/7</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Revolucionario asistente de inteligencia artificial especializado en diagnóstico, 
                reparación y soporte técnico. Disponible las 24 horas con capacidades de análisis 
                visual, reconocimiento de voz y videollamada interactiva.
              </motion.p>

              {/* Main Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAIOpen(true)}
                  className="bg-white text-blue-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl whitespace-nowrap group"
                >
                  <i className="ri-chat-3-line mr-3 text-xl group-hover:animate-bounce"></i>
                  Iniciar Diagnóstico IA
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openReadyAgent}
                  className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-2xl whitespace-nowrap group"
                >
                  <i className="ri-phone-line mr-3 text-xl group-hover:animate-pulse"></i>
                  Llamada con Asistente
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCalendly}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-2xl whitespace-nowrap group"
                >
                  <i className="ri-calendar-line mr-3 text-xl group-hover:animate-pulse"></i>
                  Reservar Cita Online
                </motion.button>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-brain-line text-3xl text-green-300"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">IA Avanzada</h3>
                  <p className="text-blue-100 text-sm">Diagnóstico inteligente con análisis profundo de problemas técnicos</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-image-line text-3xl text-purple-300"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">Análisis Visual</h3>
                  <p className="text-blue-100 text-sm">Envía fotos de errores para diagnóstico visual instantáneo</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mic-line text-3xl text-red-300"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">Control por Voz</h3>
                  <p className="text-blue-100 text-sm">Describe problemas por voz y recibe respuestas habladas</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-video-line text-3xl text-yellow-300"></i>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">Videollamada IA</h3>
                  <p className="text-blue-100 text-sm">Interacción cara a cara con avatar técnico especializado</p>
                </motion.div>
              </motion.div>

              {/* Technical Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-8">Capacidades Técnicas Especializadas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                  {[
                    { icon: 'ri-bug-line', label: 'Eliminación de Virus' },
                    { icon: 'ri-speed-line', label: 'Optimización' },
                    { icon: 'ri-wifi-line', label: 'Problemas de Red' },
                    { icon: 'ri-computer-line', label: 'Pantallazos Azules' },
                    { icon: 'ri-hard-drive-line', label: 'Recuperación de Datos' },
                    { icon: 'ri-printer-line', label: 'Configuración Impresoras' },
                    { icon: 'ri-download-line', label: 'Actualización Drivers' },
                    { icon: 'ri-tools-line', label: 'Mantenimiento General' }
                  ].map((capability, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-all duration-300">
                        <i className={`${capability.icon} text-xl text-white`}></i>
                      </div>
                      <p className="text-xs text-blue-200 group-hover:text-white transition-colors">{capability.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <ProductsSection />
        <AboutSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />

      {/* AI Components */}
      <PCDoctorAI isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <AppointmentScheduler isOpen={isSchedulerOpen} onClose={() => setIsSchedulerOpen(false)} />

      {/* Calendly Modal */}
      {isCalendlyOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <i className="ri-calendar-line text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Reservar Cita con PC Doctor AI</h3>
                    <p className="text-green-100 text-sm">Selecciona el mejor horario para ti</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCalendlyOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="flex-1 overflow-hidden">
              <div 
                className="calendly-inline-widget h-full w-full" 
                data-url="https://calendly.com/mitrijurrea/30min"
                style={{ minWidth: '320px', height: '100%' }}
              ></div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-4 z-40">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAIOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 group"
          title="PC Doctor AI - Asistente Técnico"
        >
          <i className="ri-robot-2-line text-xl group-hover:animate-pulse"></i>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={openCalendly}
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 group"
          title="Reservar Cita Online"
        >
          <i className="ri-calendar-line text-xl group-hover:animate-bounce"></i>
        </motion.button>
      </div>
    </div>
  );
}

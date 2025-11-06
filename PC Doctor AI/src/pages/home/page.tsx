'use client';
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

export default function Page() {
  // 💡 Estados que faltaban
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // 📅 Cargar script de Calendly
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // 📞 Función para abrir los widgets
  const openReadyAgent = () => {
    const widget = document.querySelector('#vapi-widget-floating-button') as HTMLElement;
    if (widget) widget.click();
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  // 🧩 Render principal
  return (
    <div className="min-h-screen relative">
      <Header />

      <main>
        <HeroSection />

        {/* PC Doctor AI Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/10 rounded-full"
            />
            <motion.div
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
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
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="bg-white/20 backdrop-blur-sm p-6 rounded-full mr-6 border border-white/30"
                >
                  <i className="ri-robot-2-line text-5xl text-white"></i>
                </motion.div>
                <div className="text-left">
                  <h2 className="text-5xl font-bold text-white mb-2">PC Doctor AI</h2>
                  <p className="text-2xl text-blue-200">Técnico Virtual Inteligente 24/7</p>
                </div>
              </motion.div>

              <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Revolucionario asistente de inteligencia artificial especializado en diagnóstico,
                reparación y soporte técnico. Disponible las 24 horas con análisis visual, voz y videollamada interactiva.
              </p>

              {/* Botones principales */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAIOpen(true)}
                  className="bg-white text-blue-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl group"
                >
                  <i className="ri-chat-3-line mr-3 text-xl group-hover:animate-bounce"></i>
                  Iniciar Diagnóstico IA
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openReadyAgent}
                  className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all shadow-2xl group"
                >
                  <i className="ri-phone-line mr-3 text-xl group-hover:animate-pulse"></i>
                  Llamada con Asistente
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCalendly}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all shadow-2xl group"
                >
                  <i className="ri-calendar-line mr-3 text-xl group-hover:animate-pulse"></i>
                  Reservar Cita Online
                </motion.button>
              </div>
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

      {/* IA Components */}
      <PCDoctorAI isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <AppointmentScheduler isOpen={isSchedulerOpen} onClose={() => setIsSchedulerOpen(false)} />

      {/* Modal de Calendly */}
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
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 flex justify-between items-center">
              <h3 className="font-bold text-xl">Reservar Cita con PC Doctor AI</h3>
              <button onClick={() => setIsCalendlyOpen(false)}>
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            <div
              className="calendly-inline-widget flex-1"
              data-url="https://calendly.com/mitrijurrea/30min"
              style={{ minWidth: '320px', height: '100%' }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Botones flotantes */}
      <div className="fixed bottom-6 left-6 flex flex-col space-y-4 z-40">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAIOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all group"
          title="PC Doctor AI - Asistente Técnico"
        >
          <i className="ri-robot-2-line text-xl group-hover:animate-pulse"></i>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={openCalendly}
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all group"
          title="Reservar Cita Online"
        >
          <i className="ri-calendar-line text-xl group-hover:animate-bounce"></i>
        </motion.button>
      </div>
    </div>
  );
}

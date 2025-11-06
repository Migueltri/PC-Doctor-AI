import { useState } from "react";
import HeroSection from "./pages/home/components/HeroSection";
import AboutSection from "./pages/home/components/AboutSection";
import ServicesSection from "./pages/home/components/ServicesSection";
import ProductsSection from "./pages/home/components/ProductsSection";
import NewsletterSection from "./pages/home/components/NewsletterSection";
import ContactSection from "./pages/home/components/ContactSection";

import PCDoctorAI from "./components/ai/PCDoctorAI";
import AppointmentScheduler from "./components/ai/AppointmentScheduler";
import { motion } from "framer-motion";

export default function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  return (
    <>
      <HeroSection />

      {/* 🔵  SECCIÓN AZUL DE PC DOCTOR IA  (tu diseño de Readdy) */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full border border-white/30 mb-6">
              <i className="ri-robot-2-line text-5xl text-white"></i>
            </div>
            <h2 className="text-5xl font-bold text-white mb-2">
              PC Doctor AI
            </h2>
            <p className="text-2xl text-blue-200">
              Técnico Virtual Inteligente 24/7
            </p>
          </motion.div>

          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolucionario asistente de inteligencia artificial especializado en diagnóstico,
            reparación y soporte técnico. Disponible las 24 horas con capacidades de análisis visual,
            reconocimiento de voz y videollamada interactiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => setIsAIOpen(true)}
              className="bg-white text-blue-800 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl"
            >
              <i className="ri-chat-3-line mr-3 text-xl"></i>
              Iniciar Diagnóstico IA
            </button>

            <button
              onClick={() => alert('Aquí va la llamada con agente o Ready Agent')}
              className="bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-2xl"
            >
              <i className="ri-phone-line mr-3 text-xl"></i>
              Llamada con
            </button>

            <button
              onClick={() => setIsSchedulerOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-2xl"
            >
              <i className="ri-calendar-line mr-3 text-xl"></i>
              Reservar Cita Online
            </button>
          </div>

          {/* tarjetas de capacidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-brain-line text-3xl text-green-300"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">IA Avanzada</h3>
              <p className="text-blue-100 text-sm">
                Diagnóstico inteligente con análisis profundo de problemas técnicos.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-image-line text-3xl text-purple-300"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Análisis visual</h3>
              <p className="text-blue-100 text-sm">
                Envía fotos de errores para diagnóstico visual instantáneo.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-red-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mic-line text-3xl text-red-300"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Control por Voz</h3>
              <p className="text-blue-100 text-sm">
                Describe problemas por voz y recibe respuestas habladas.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-yellow-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-video-line text-3xl text-yellow-300"></i>
              </div>
              <h3 className="font-bold text-lg mb-3">Videollamada IA</h3>
              <p className="text-blue-100 text-sm">
                Interacción cara a cara con avatar técnico especializado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <NewsletterSection />
      <ContactSection />

      {/* 🚀 Modales */}
      <PCDoctorAI isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <AppointmentScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />
            {/* 🚀 Modales del chat y del planificador */}
      <PCDoctorAI isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <AppointmentScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />

      {/* 🔹 BOTÓN FLOTANTE AZUL (como en Readdy) */}
      {!isAIOpen && (
        <div className="fixed bottom-6 right-6 flex items-center space-x-2 z-[9999]">
          <button
            onClick={() => setIsAIOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 flex items-center"
            title="Habla con PC Doctor AI"
          >
            <i className="ri-robot-2-line text-2xl"></i>
          </button>
          <span className="hidden sm:inline-block bg-blue-900/80 text-white text-sm px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
            Habla con nosotros
          </span>
        </div>
      )}
    </>
  );
}

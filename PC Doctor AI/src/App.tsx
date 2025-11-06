import { useState } from "react";
import HeroSection from "./pages/home/components/HeroSection";
import AboutSection from "./pages/home/components/AboutSection";
import ServicesSection from "./pages/home/components/ServicesSection";
import ProductsSection from "./pages/home/components/ProductsSection";
import NewsletterSection from "./pages/home/components/NewsletterSection";
import ContactSection from "./pages/home/components/ContactSection";

import PCDoctorAI from "./components/ai/PCDoctorAI";
import AppointmentScheduler from "./components/ai/AppointmentScheduler";

export default function App() {
  // 🔹 El chat ahora empieza cerrado
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <NewsletterSection />
      <ContactSection />

      {/* Chat IA */}
      <PCDoctorAI isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <AppointmentScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />

      {/* 🔹 Botón flotante para abrir/cerrar el chat */}
      <button
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all duration-300 group z-[9999]"
        title="Habla con PC Doctor AI"
      >
        <i className="ri-robot-2-line text-2xl group-hover:animate-pulse"></i>
      </button>
    </>
  );
}

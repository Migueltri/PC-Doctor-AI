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
  const [isAIOpen, setIsAIOpen] = useState(true);    // 👈 debe estar en true mientras pruebas
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <NewsletterSection />
      <ContactSection />

      {/* 👇 importa el chat y pásale isOpen en true */}
      <PCDoctorAI isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
      <AppointmentScheduler
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />
    </>
  );
}

import HeroSection from "./pages/home/components/HeroSection";
import AboutSection from "./pages/home/components/AboutSection";
import ServicesSection from "./pages/home/components/ServicesSection";
import ProductsSection from "./pages/home/components/ProductsSection";
import NewsletterSection from "./pages/home/components/NewsletterSection";
import ContactSection from "./pages/home/components/ContactSection";

import PCDoctorAI from "./components/ai/PCDoctorAI";
import AppointmentScheduler from "./components/ai/AppointmentScheduler";

export default function App() {
  return (
    <>
      {/* Secciones actuales */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <NewsletterSection />
      <ContactSection />

      {/* 🔹Nueva sección IA*/}
      <PCDoctorAI />
      <AppointmentScheduler />
    </>
  );
}

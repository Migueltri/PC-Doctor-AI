import Home from "./pages/home/page";
import ContactSection from "./pages/components/ContactSection";
import AboutSection from "./pages/components/AboutSection";
import HeroSection from "./pages/components/HeroSection";
import ServicesSection from "./pages/components/ServicesSection";
import NewsletterSection from "./pages/components/NewsletterSection";
import ProductsSection from "./pages/components/ProductsSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <NewsletterSection />
      <ContactSection />
      <Home />
    </>
  );
}

import ContactSection from "@/src/components/Contact";
import DermatologistSection from "@/src/components/DermatologistSection";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/HeroProducts";
import Navigation from "@/src/components/Navigation";
import ProductsSection from "@/src/components/Products";


const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection/>
      <ProductsSection/>
      <DermatologistSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};

export default Home;
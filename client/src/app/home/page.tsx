import ContactSection from "@/src/components/Contact";
import DermatologistSection from "@/src/components/DermatologistSection";
import Footer from "@/src/components/Footer";
import Navigation from "@/src/components/Navigation";


const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <DermatologistSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};

export default Home;
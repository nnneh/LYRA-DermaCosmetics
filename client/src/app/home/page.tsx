import CategorySection from "@/src/components/Category";
import ContactSection from "@/src/components/Contact";
import DermatologistSection from "@/src/components/DermatologistSection";
import Footer from "@/src/components/Footer";
import HeroSection from "@/src/components/HeroProducts";
import IngredientsSection from "@/src/components/IngredientSection";
import Navigation from "@/src/components/Navigation";
import ProductsSection from "@/src/components/Products";
import PromoBanner from "@/src/components/PromoBanner";
import QuizSection from "@/src/components/Quiz";
import StorySection from "@/src/components/Story";
import TipsSection from "@/src/components/TipsSection";


const Home = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection/>
      <CategorySection/>
      <ProductsSection/>
      <PromoBanner/>
      <IngredientsSection/>
      <StorySection/>
      <DermatologistSection/>
      <QuizSection/>
      <TipsSection/>
      <ContactSection/>
      <Footer/>
    </main>
  );
};

export default Home;
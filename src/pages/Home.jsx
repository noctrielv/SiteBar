import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import DrinksSection from '../components/DrinksSection';
import ReviewsSection from '../components/ReviewsSection';
import LocationSection from '../components/LocationSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0602' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <DrinksSection />
      <ReviewsSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
}
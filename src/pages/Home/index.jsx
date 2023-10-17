import BestDecisionSection from "../../components/BestDecisionSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import MarketPlaceSection from "../../components/MarketPlaceSection";
import MobileFriendlySection from "../../components/MobileFriendlySection";
import VideoSection from "../../components/VideoSection";
import IntegratedToolSection from "../../components/IntegratedToolSection";
import AppThemeSection from "../../components/AppThemeSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MobileFriendlySection />
      <MarketPlaceSection />
      <BestDecisionSection />
      <VideoSection />
      <IntegratedToolSection />
      <AppThemeSection />
      <Footer />
    </div>
  );
};

export default Home;

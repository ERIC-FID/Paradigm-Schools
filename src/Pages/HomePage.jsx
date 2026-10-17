import HeroSection from "../Sections/Herosection";
import AboutSection from "../Sections/AboutPage";
import WhyChooseUs from "../Sections/WhyChooseUs";
import AchievementsSection from "../Sections/Achievemnts";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <AchievementsSection />
    </main>
  );
}

export default HomePage;
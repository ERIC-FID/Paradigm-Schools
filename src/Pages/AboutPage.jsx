
import AboutHeroSection from "../Sections/Aboutherosection";
import Leadership from "../Sections/Leadership"
import VisionMissionSection from "../Sections/Mission";
import Gallery from "../Sections/Gallery"

function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <Leadership/>
      <VisionMissionSection/>
      <Gallery/>
    </main>
  );
}

export default AboutPage;

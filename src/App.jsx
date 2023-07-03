// import FeaturedProjectsSection from "../Test";
import BannerSection from "./Components/Banner/Banner";
import ContactSection from "./Components/ContactSection/ContactSection";
import FooterComponent from "./Components/Footer/Footer";
import { Nav } from "./Components/Navbar/Navbar";
import { Pricing } from "./Components/Pricing/Pricing";
import Projects from "./Components/Projects/Projects";
import SkillsSection from "./Components/SkillSection/SkillSection";

function App() {
  return (
    <>
      <Nav />
      <BannerSection />
      <Projects />
      <SkillsSection />
      {/* <FeaturedProjectsSection /> */}
      <Pricing />
      <ContactSection />
      <FooterComponent />
    </>
  );
}

export default App;

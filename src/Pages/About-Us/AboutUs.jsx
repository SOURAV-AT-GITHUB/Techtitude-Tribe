import Testimonials from "./Sections/Testimonials";
import WhyChooseUs from "./Sections/WhyChooseUs";
import HeroSection from "../../components/HeroSection";
import WhoAreWe from "./Sections/WhoAreWe";
import ProminentSolutions from "./Sections/ProminentSolutions";

export default function AboutUs() {
  return (
    <main>
        <HeroSection
        id={"aboutus-hero-section"}
        p1={"ABOUT"}
        heading={"About Us"}
        p2={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        hasButton={false}
      />
        <WhoAreWe/>
        <WhyChooseUs/>
        <ProminentSolutions/>
        <Testimonials/>
    </main>
  )
}

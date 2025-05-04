import Achievements from "./Sections/Achievements";
import OurExpertise from "./Sections/OurExpertise";
import WhatWeProvide from "./Sections/WhatWeProvide";
import Testimonials from "./Sections/Testimonials";
import WhyChooseUs from "./Sections/WhyChooseUs";
import HeroSection from "../../components/HeroSection";
export default function Home() {
  return (
    <main>
      <HeroSection
        id={"home-hero-section"}
        p1={"Secure & it Solutions"}
        heading={"Innovative IT Solutions For A Digital Future"}
        p2={
          " Techtitude Tribe empowers businesses with cutting-edge technology solutions tailored to meet the unique needs of modern enterprises. Let us help you stay ahead in the digital age."
        }
        hasButton={true}
      />
      <WhatWeProvide />
      <WhyChooseUs />
      <OurExpertise />
      <Achievements />
      <Testimonials />
    </main>
  );
}

import BaseLayout from "src/components/layout/BaseLayout";
import Navbar from "src/components/layout/NavBar";
import HeroSection from "src/components/layout/sections/HeroSection";

export default function Home() {
  return (
    <BaseLayout 
    bgColor="linear-gradient(to bottom, #236742 5%, #ffffff 100%)"
    height="2000px"
    >
      <Navbar />
      <HeroSection />
    </BaseLayout>
  );
}
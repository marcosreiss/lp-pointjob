import BaseLayout from "src/components/layout/BaseLayout";
import Navbar from "src/components/layout/NavBar";
import HeroSection from "src/components/layout/sections/HeroSection";
import ProductSection from "src/components/layout/sections/ProductSection";
import TestimonialsCarousel from "src/components/layout/sections/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <BaseLayout
        bgColor="linear-gradient(to bottom, #236742 15%, #ffffff 100%)">
        <Navbar />
        <HeroSection />
        <ProductSection />
      </BaseLayout>
      <TestimonialsCarousel />
    </>
  );
}
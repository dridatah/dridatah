import ColorNdCursorSwitcher from "@/components/common/ColorNdCursorSwitcher";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import AboutSection from "@/components/home_1/AboutSection";
import BlogSection from "@/components/home_1/BlogSection";
import ContactSection from "@/components/home_1/ContactSection";
import ExpertsSection from "@/components/home_1/ExpertsSection";
import HeroSection from "@/components/home_1/HeroSection";
import Portfolio from "@/components/home_1/Portfolio";
import Pricing from "@/components/home_1/Pricing";
import ServiceSection from "@/components/home_1/ServiceSection";
import Testimonial from "@/components/home_1/Testimonial";
import TickerSection from "@/components/home_1/TickerSection";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";

export const metadata = {
  title: "Crete Personal Portfolio - Homepage-1",
  openGraph: {
    title: "Crete - Crete Personal Portfolio Next js Template",
  },
};

export default function HomePageOneOld() {
  return (
    <>
      <Header select_color="dark" layout={1} />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TickerSection />
      <ExpertsSection />
      <Portfolio />
      <Testimonial />
      <Pricing />
      <ContactSection />
      <BlogSection />
      <Footer />
    </>
  );
}

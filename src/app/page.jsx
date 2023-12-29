import React from "react";
import Header from "@/components/layouts/Header";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import MobileMenu from "@/components/navbar/MobileMenu";
import HeroSection from "@/components/home_2/HeroSection";
import BrandNdServiceWrapper from "@/components/home_2/BrandNdServiceWrapper";
import AboutSection from "@/components/home_2/AboutSection";
import TestimonialSection from "@/components/home_2/TestimonialSection";
import FooterTwo from "@/components/layouts/FooterTwo";
import Pricing from "@/components/home_1/Pricing";
import ContactSection from "@/components/home_1/ContactSection";

export const metadata = {
  title: "Dridatah Technology Pvt Ltd",
  description:
    "Dridatah partners with ambitious startups to transform your innovative ideas into reality through custom-built software solutions. Don't let your brilliant concepts stay on the whiteboard.",
  openGraph: {
    title: "Dridatah Technology Pvt Ltd",
    description:
      "Dridatah partners with ambitious startups to transform your innovative ideas into reality through custom-built software solutions. Don't let your brilliant concepts stay on the whiteboard.",
    url: "https://dridatah.com",
    siteName: "Dridatah",
    images: [
      {
        url: "https://dridatah.jibi.dev/assets/images/og-meta-image.png",
        width: 800,
        height: 600,
      },
    ],
    type: "website",
  },
};

export default function HomePageTwo() {
  return (
    <>
      <Header layout={2} select_color="dark" />
      <OffCanvasBox />
      <MobileMenu />
      <HeroSection />
      <BrandNdServiceWrapper />
      <AboutSection />
      <TestimonialSection />
      <Pricing />
      <ContactSection />
      <FooterTwo />
    </>
  );
}

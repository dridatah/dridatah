import React from "react";
import Header from "@/components/layouts/Header";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import MobileMenu from "@/components/navbar/MobileMenu";
import HeroSection from "@/components/home_2/HeroSection";
import BrandNdServiceWrapper from "@/components/home_2/BrandNdServiceWrapper";
import AboutSection from "@/components/home_2/AboutSection";
import CaseStudies from "@/components/home_2/CaseStudies";
import CallToActiion from "@/components/home_2/CallToActiion";
import VideoSection from "@/components/home_2/VideoSection";
import TeamSectionWrapper from "@/components/home_2/TeamSectionWrapper";
import DreamerSection from "@/components/home_2/DreamerSection";
import TestimonialSection from "@/components/home_2/TestimonialSection";
import BlogSection from "@/components/home_2/BlogSection";
import FooterBrands from "@/components/home_2/FooterBrands";
import FooterTwo from "@/components/layouts/FooterTwo";
import ColorNdCursorSwitcher from "@/components/common/ColorNdCursorSwitcher";
import Pricing from "@/components/home_1/Pricing";
import ContactSection from "@/components/home_1/ContactSection";

export const metadata = {
  title: "Crete Personal Portfolio - Homepage-2",
  openGraph: {
    title: "Crete - Crete Personal Portfolio Next js Template",
  },
};

export default function HomePageTwo() {
  return (
    <>
      <Header layout={2} select_color="dark" />
      {/* <ColorNdCursorSwitcher position={`left`} /> */}
      <OffCanvasBox />
      <MobileMenu />
      <HeroSection />
      <BrandNdServiceWrapper />
      <AboutSection />
      {/* <CaseStudies /> */}
      {/* <CallToActiion /> */}
      {/* <VideoSection /> */}
      {/* <TeamSectionWrapper /> */}
      {/* <DreamerSection /> */}
      <TestimonialSection />
      <Pricing />
      <ContactSection />
      {/* <BlogSection /> */}
      {/* <FooterBrands /> */}
      <FooterTwo />
    </>
  );
}

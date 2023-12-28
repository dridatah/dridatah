import Breadcrumb from "@/components/common/Breadcrumb";
import ColorNdCursorSwitcher from "@/components/common/ColorNdCursorSwitcher";
import OffCanvasBox from "@/components/common/OffCanvasBox";
import ContactFormSection from "@/components/contact_page/ContactFormSection";
import ContactSection from "@/components/contact_page/ContactSection";
import FooterBrands from "@/components/home_2/FooterBrands";
import FooterTwo from "@/components/layouts/FooterTwo";
import Header from "@/components/layouts/Header";
import MobileMenu from "@/components/navbar/MobileMenu";
import React from "react";

export const metadata = {
  title: "Crete Personal Portfolio - Contact Page",
  openGraph: {
    title: "Crete - Crete Personal Portfolio Next js Template",
  },
};

export default function Contact() {
  return (
    <>
      <Header layout={1} select_color="light" social_menu_color="light" />
      <Breadcrumb title={`Contact Us`} page={`Contact Us`} />
      {/* <ColorNdCursorSwitcher position={`left`} /> */}
      <OffCanvasBox />
      <MobileMenu />
      <ContactSection />
      <ContactFormSection />
      {/* <FooterBrands /> */}
      <FooterTwo />
    </>
  );
}

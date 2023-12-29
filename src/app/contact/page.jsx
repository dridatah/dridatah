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
  title: "Contact - Dridatah Technology Pvt Ltd",
  openGraph: {
    title: "Contact - Dridatah Technology Pvt Ltd",
    description:
      "Dridatah is a veteran web and mobile application development company based in Kerala, India.",
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

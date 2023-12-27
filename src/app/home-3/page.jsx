import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import HomeThreeOverlay from '@/components/common/HomeThreeOverlay'
import FooterBrands from '@/components/home_2/FooterBrands'
import AboutSection from '@/components/home_3/AboutSection'
import ContactSection from '@/components/home_3/ContactSection'
import GoogleMapSection from '@/components/home_3/GoogleMapSection'
import HeroSection from '@/components/home_3/HeroSection'
import ProjectSection from '@/components/home_3/ProjectSection'
import ServiceSection from '@/components/home_3/ServiceSection'
import TestimonialSection from '@/components/home_3/TestimonialSection'
import TickerSection from '@/components/home_3/TickerSection'
import FooterTwo from '@/components/layouts/FooterTwo'
import HeaderTwo from '@/components/layouts/HeaderTwo'
import HomeThreeMenu from '@/components/navbar/HomeThreeMenu'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Homepage-3',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function HomePageThree() {
  return (
    <>
      <HeaderTwo />
      <ColorNdCursorSwitcher position={`right`} />
      <HomeThreeMenu />
      <HeroSection />
      <HomeThreeOverlay />
      <ProjectSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialSection />
      <TickerSection />
      <ContactSection />
      <GoogleMapSection />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

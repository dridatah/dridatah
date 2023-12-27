import React from 'react'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import BlogSection from '@/components/home_4/BlogSection'
import AboutSection from '@/components/home_4/AboutSection'
import BrandSection from '@/components/home_4/BrandSection'
import ExperienceSection from '@/components/home_4/ExperienceSection'
import HeroSection from '@/components/home_4/HeroSection'
import PricingSection from '@/components/home_4/PricingSection'
import ProjectSection from '@/components/home_4/ProjectSection'
import ServiceSection from '@/components/home_4/ServiceSection'
import TestimonialSection from '@/components/home_4/TestimonialSection'
import TickerSection from '@/components/home_4/TickerSection'
import ContactSection from '@/components/home_1/ContactSection'
import FooterThree from '@/components/layouts/FooterThree'
import HomeThreeMenu from '@/components/navbar/HomeThreeMenu'
import HeaderThree from '@/components/layouts/HeaderThree'
import HomeThreeOverlay from '@/components/common/HomeThreeOverlay'

export const metadata = {
  title: 'Crete Personal Portfolio - Homepage-4',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function HomePageFour() {
  return (
    <div className='hm4-main'>
      <HomeThreeMenu />
      <HeaderThree />
      <ColorNdCursorSwitcher
        position={`right`} />
      <HeroSection />
      <HomeThreeOverlay />
      <ServiceSection />
      <TickerSection />
      <AboutSection />
      <ExperienceSection />
      <BrandSection />
      <ProjectSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
      <ContactSection
        wrapper_class={`hm4-contact`} />
      <FooterThree />
    </div>
  )
}

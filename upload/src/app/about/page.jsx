import AboutSection from '@/components/about_page/AboutSection'
import CustomerExperience from '@/components/about_page/CustomerExperience'
import DreamNdBrandSection from '@/components/about_page/DreamNdBrandSection'
import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import CaseStudies from '@/components/home_2/CaseStudies'
import FooterBrands from '@/components/home_2/FooterBrands'
import ServiceSection from '@/components/home_2/ServiceSection'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - About Page',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function About() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`About Company`}
        page={`About Us`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <AboutSection />
      <ServiceSection wrapper_class={`light-bg`} />
      <CustomerExperience />
      <CaseStudies />
      <DreamNdBrandSection />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

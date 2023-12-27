import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import BlogSection from '@/components/home_2/BlogSection'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import FeatureSection from '@/components/service_page/FeatureSection'
import ServiceSection from '@/components/service_page/ServiceSection'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Service Page',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function Service() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`Services`}
        page={`Services`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <ServiceSection />
      <FeatureSection />
      <BlogSection />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

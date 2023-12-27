import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import FaqSection from '@/components/faq_page/FaqSection'
import BlogSection from '@/components/home_2/BlogSection'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import Newsletter from '@/components/team_page/details/Newsletter'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - FAQ Page',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}


export default function FAQ() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`FAQ Area`}
        page={`FAQ Page`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <FaqSection />
      <Newsletter />
      <BlogSection />

      <FooterBrands />
      <FooterTwo />
    </>
  )
}

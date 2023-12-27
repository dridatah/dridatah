import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import BlogSection from '@/components/home_2/BlogSection'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import Newsletter from '@/components/team_page/details/Newsletter'
import TeamDetailsSection from '@/components/team_page/details/TeamDetailsSection'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Team Details',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function TeamDetails() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`Team Details`}
        page={`Team Details`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <TeamDetailsSection />
      <Newsletter />
      <BlogSection />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

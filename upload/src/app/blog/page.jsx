import BlogWrapper from '@/components/blog_page/BlogWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Blog Page',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function Blog() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`Blog Page`}
        page={`Blog Page`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <BlogWrapper />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

import BlogWrapper from '@/components/blog_page/BlogWrapper'
import BlogDetailsWrapper from '@/components/blog_page/details/BlogDetailsWrapper'
import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - About Details',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function BlogDetails() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`Blog Details`}
        page={`Blog Details`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <BlogDetailsWrapper />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

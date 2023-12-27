import AppointmentSection from '@/components/appointment_page/AppointmentSection'
import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import Pricing from '@/components/home_1/Pricing'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Appointment Page',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function Appointment() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`Appointment`}
        page={`Appointment`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <AppointmentSection />
      <Pricing />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

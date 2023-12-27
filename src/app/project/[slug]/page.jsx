import Breadcrumb from '@/components/common/Breadcrumb'
import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import OffCanvasBox from '@/components/common/OffCanvasBox'
import FooterBrands from '@/components/home_2/FooterBrands'
import FooterTwo from '@/components/layouts/FooterTwo'
import Header from '@/components/layouts/Header'
import MobileMenu from '@/components/navbar/MobileMenu'
import ProjectDetailsSection from '@/components/project_page/details/ProjectDetailsSection'
import ProjectsNextPrev from '@/components/project_page/details/ProjectsNextPrev'
import RelatedProjects from '@/components/project_page/details/RelatedProjects'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Project Details',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function ProjectDetails() {
  return (
    <>
      <Header layout={1}
        select_color='light'
        social_menu_color="light"
      />
      <Breadcrumb
        title={`Project Details`}
        page={`Project Details Page`}
      />
      <ColorNdCursorSwitcher position={`left`} />
      <OffCanvasBox />
      <MobileMenu />
      <ProjectDetailsSection />
      <ProjectsNextPrev />
      <RelatedProjects />
      <FooterBrands />
      <FooterTwo />
    </>
  )
}

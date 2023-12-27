import ColorNdCursorSwitcher from '@/components/common/ColorNdCursorSwitcher'
import AboutSection from '@/components/home_5/AboutSection'
import BlogSection from '@/components/home_5/BlogSection'
import ContactSection from '@/components/home_5/ContactSection'
import HeroSection from '@/components/home_5/HeroSection'
import ProjectSection from '@/components/home_5/ProjectSection'
import SidebarNav from '@/components/navbar/SidebarNav'
import React from 'react'

export const metadata = {
  title: 'Crete Personal Portfolio - Homepage-5',
  openGraph: {
    title: 'Crete - Crete Personal Portfolio Next js Template',
  },
}

export default function HomePageFive() {

  return (
    <div
      className='hm5-main-section'
      style={{
        backgroundImage: `url("/assets/images/home-5/section-bg.jpg")`
      }}>
      <ColorNdCursorSwitcher position={`left`} />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
      <ContactSection />
      <SidebarNav />
    </div>
  )
}

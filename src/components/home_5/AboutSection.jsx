"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';
import InnerAboutBox from './InnerAboutBox';
import InnerExperienceBox from './InnerExperienceBox';
import BrandSlider from './BrandSlider';
import InnerServiceBox from './InnerServiceBox';

export default function AboutSection() {
  // get active section from global state
  const activeSection = useSelector((state) => state.global.home_five_active_section);
  return (
    <section className={`main-content-wrapper hm5-box about_box ${activeSection === 'about' && 'active'}`} id="about">
      <div className="hm5-about-section overlfow-hidden">
        <div className="container-1660">
          <div className="hm5-about-box">
            <InnerAboutBox />
            <InnerExperienceBox />
            <BrandSlider />
            <InnerServiceBox />
          </div>
        </div>
      </div>
    </section >
  )
}
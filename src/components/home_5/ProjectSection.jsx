"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';
import InnerProjectSection from './InnerProjectSection';
import InnerTestimonial from './InnerTestimonial';


export default function ProjectSection() {
  // get active section from global state
  const activeSection = useSelector((state) => state.global.home_five_active_section);
  return (
    <section className={`main-content-wrapper hm5-box project_box ${activeSection === 'project' && 'active'}`} id="project">
      <div>
        <InnerProjectSection />
        <InnerTestimonial />
      </div>
    </section>
  )
}
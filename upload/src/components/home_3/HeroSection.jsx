"use client"
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="hm3-hero-section bg-light-white position-relative overflow-hidden" style={{ backgroundImage: `url('/assets/images/shapes/hero-blur.png')` }}>
      <Image src="/assets/images/shapes/hero-shape-1.png"
        width={924}
        height={567}
        alt="circle" className="position-absolute hero-shape-1" />
      <Image src="/assets/images/shapes/line-white.png"
        width={1089}
        height={504}
        alt="white line" className="position-absolute line-white z--1" />
      <span className="text-shape position-absolute z--1">Desiger</span>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-lg-6 col-md-9 align-self-center">
            <div className="hero-content">
              <h1 suppressHydrationWarning className="display-2 mb-4 fw-bold wow fadeInUp">Hi I am Adam, Website & UI/UX Designer</h1>
              <p suppressHydrationWarning className="mb-32 wow fadeInUp" data-wow-delay="0.2s">Since creative designers often interact with creativeteams, managers and clients, they need strongcommunication skills.</p>
              <button suppressHydrationWarning className="template-btn primary-btn rounded-pill wow fadeInUp" data-wow-delay="0.3s" >Download CV</button>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 align-self-end">
            <div suppressHydrationWarning className="hero-image wow fadeInUp">
              <Image src="/assets/images/home-3/hero-man.png"
                width={907}
                height={1358}
                alt="hero man" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
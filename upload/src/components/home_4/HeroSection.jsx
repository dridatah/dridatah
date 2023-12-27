"use client"
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <section className="hm4-hero-section bg-white position-relative z-1 overflow-hidden">
      <span className="circle-shape-1 position-absolute z--1 rounded-circle"></span>
      <span className="circle-shape-2 position-absolute z--1 rounded-circle"></span>
      <span className="circle-shape-3 position-absolute z--1 rounded-circle"></span>
      <span className="circle-shape-4 position-absolute z--1 rounded-circle" data-parallax='{"y": 100}'></span>
      <span className="circle-shape-5 position-absolute z--1 rounded-circle" data-parallax='{"x": 100}'></span>

      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-7">
            <div className="hm4-hero-content">
              <span className="primary-text-color hm4-subtitle fw-semibold">Hello! I am Mason William</span>
              <h1 className="display-1 fw-bold mt-40 mb-50">Expert Front-end Developer</h1>
              <p className="lead mb-50 fw-medium">From Berlin, Germany. I have rich experience in UI/UX design, also I am good at Front-end Task. I love to talk with you about our unique.</p>
              <button className="template-btn primary-btn text-uppercase">Download CV</button>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="hm4-hero-right position-relative z-1">
              <Image src="/assets/images/home-4/hero-1.png" alt="not found" className="img-fluid" width={502} height={626} />
              <span className="hero-icon html rounded-circle d-inline-flex align-itms-center justify-content-center z--1 bg-white position-absolute"><Image src="/assets/images/icons/html.svg" alt="html" className="img-fluid" width={40} height={40} /></span>
              <span className="hero-icon css rounded-circle d-inline-flex align-itms-center justify-content-center z--1  bg-white position-absolute"><Image src="/assets/images/icons/css.svg" alt="html" className="img-fluid" width={40} height={40} /></span>
              <span className="hero-icon bootstrap rounded-circle d-inline-flex align-itms-center justify-content-center bg-white position-absolute"><Image src="/assets/images/icons/bootstrap.svg" alt="html" className="img-fluid" width={60} height={60} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
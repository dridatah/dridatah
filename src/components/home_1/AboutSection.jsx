"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AboutSection() {
  return (
    <section className="about-section ptb-100 overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-6 col-lg-6">
            <div className="about-left position-relative">
              <Image
                src="/assets/images/home-1/ab-1.jpg"
                alt="not found"
                width={938}
                height={842}
                className="img-fluid rounded-3"
              />
              <div
                className="ab-award-box bg-white py-40 px-40 position-absolute z-1"
              >
                <h6 className="mb-0">We are since 2002! Over 200 Awards</h6>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about-right">
              <span
                suppressHydrationWarning
                className="cr-subtitle fw-semibold primary-text-color position-relative wow fadeInUp d-inline-block"
              >50% discount on early purchase</span>
              <h2
                suppressHydrationWarning
                className="mb-5 mt-4 wow fadeInUp" data-wow-delay="0.2s">
                We create digital Ideas that are
                <span className="primary-text-color primary-bg-light px-2"
                >bigger</span>
              </h2>
              <p
                suppressHydrationWarning
                className="mb-40 wow fadeInUp" data-wow-delay="0.3s">
                Leo in taciti conubia, arcu dapibus convallis commodo. Bibendum
                tristique lacus aenean quisque ut
                <span className="primary-text-color fw-semibold"
                >primis torquent dis eget</span>
              </p>
              <div
                suppressHydrationWarning
                className="d-flex align-items-center gap-4 ab-flex-box flex-wrap flex-sm-nowrap wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <Image
                  src="/assets/images/home-1/ab-2.jpg"
                  alt="not found"
                  width={166}
                  height={136}
                  className="img-fluid rounded-2"
                />
                <p className="mb-0">
                  Leo in taciti conubia, arcu dapibus convallis commodo sour
                  Bibendum tristique lacus aenean quisque ut primis torquent dis
                  eget awesome company feewdbacks
                </p>
              </div>
              <div className="spacer my-40"></div>
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <Link
                  suppressHydrationWarning
                  href="/about"
                  className="template-btn primary-btn wow fadeInUp"
                  data-wow-delay="0.2s"
                >More About Us</Link>
                <Link
                  suppressHydrationWarning
                  href="/appointment"
                  className="template-btn secondary-btn wow fadeInUp"
                  data-wow-delay="0.3s"
                >Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
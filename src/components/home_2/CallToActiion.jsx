"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CallToActiion() {
  return (
    <section className="hm2-cta-section bg-white ptb-100 overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-6">
            <div className="hm2-cta-left position-relative z-1">
              <Image src="/assets/images/home-2/double-image.png" alt="double image"
                width={1083}
                height={920}
                className="img-fluid d-xl-none"
              />
              <span className="circle-shape position-absolute z--1"></span>
              <Image src="/assets/images/home-2/cta-1.png" alt="not found"
                width={602}
                height={486}
                suppressHydrationWarning
                className="img-fluid cta-1 wow fadeInLeft"
              />
              <Image src="/assets/images/home-2/cta-2.png" alt="not found"
                width={407}
                height={479}
                suppressHydrationWarning
                className="img-fluid cta-2 wow fadeInRight"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hm2-cta-content ps-xl-5">
              <span suppressHydrationWarning className="cr-subtitle position-relative primary-text-color fw-semibold wow fadeInUp d-inline-block">50% discount on early purchase</span>
              <h2
                suppressHydrationWarning
                className="mt-32 mb-40 wow fadeInUp" data-wow-delay="0.2s">We deliver the <br /> better <span className="primary-bg-light primary-text-color px-2">customer</span> experiences</h2>
              <p
                suppressHydrationWarning
                className="mb-5 wow fadeInUp" data-wow-delay="0.3s">Natoque sodales sem class libero nunc ornarei parturint ongue integer vivamus rdiculus aliquet gravida maecenas dictum sed facilisi enim diam ultricies sociis nunc feugiat</p>
              <div className="d-flex align-items-center gap-3 gap-sm-4 flex-wrap">
                <Link href="/about" suppressHydrationWarning className="template-btn primary-btn wow fadeInUp" data-wow-delay="0.4s">Learn More</Link>
                <Link href="/appointment" suppressHydrationWarning className="template-btn outline-secondary wow fadeInUp" data-wow-delay="0.5s">Get Started <span className="ms-2"><i className="fas fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
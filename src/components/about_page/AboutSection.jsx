"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function AboutSection() {
  return (
    <section className="about-section ptb-100 overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-6">
            <div className="about-content-left position-relative">
              <Image src="/assets/images/about/ab-2.png" alt="feature-image" className="img-fluid" width={905} height={985} />
              <div suppressHydrationWarning className="position-absolute ab-years-box wow fadeInUp">
                <h3 className="mb-0">
                  25
                </h3>
                <p className="mb-0">Years<br />Of Experince</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-right">
              <span className="cr-subtitle position-relative primary-text-color fw-semibold">More About Our Company</span>
              <h2 className="mt-4 mb-5">Increase Your Website's Traffic & Save Time and Efforrt With Us.</h2>
              <p className="mb-32">A creative agency is a company that specializes in developing and executing creative campaigns and projects for clients. They offer a range of services such as brand strategy, advertising, graphic design, web development, and more to help businesses communicate their message.</p>
              <div className="cta-box bg-white rounded-3 theme-shadow">
                <div className="d-flex gap-3 flex-wrap flex-sm-nowrap">
                  <span className="icon-wrapper primary-bg-light rounded-circle d-flex align-items-center justify-content-center flex-shrink-0">
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.8203 1.30469C20.3789 1.82031 20.3789 2.72266 19.8203 3.23828L8.82031 14.2383C8.30469 14.7969 7.40234 14.7969 6.88672 14.2383L1.38672 8.73828C0.828125 8.22266 0.828125 7.32031 1.38672 6.80469C1.90234 6.24609 2.80469 6.24609 3.32031 6.80469L7.83203 11.3164L17.8867 1.30469C18.4023 0.746094 19.3047 0.746094 19.8203 1.30469Z" fill="#5044EB" />
                    </svg>
                  </span>
                  <div>
                    <h6 className="mb-20">The best agency solution 2023</h6>
                    <p className="mb-0">These tools will allow you to handle tasks such hanging sves assemble furniture</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4 mt-40 flex-wrap">
                  <Link href="/" className="template-btn primary-btn">Learn More</Link>
                  <a href="tel:2521457689">
                    <div className="cta-call-btn d-flex align-items-center gap-2">
                      <span className="icon-tel rounded-circle">
                        <span className="primary-bg-color rounded-circle w-100 h-100 d-inline-flex align-items-center justify-content-center text-white">
                          <i className="fa-solid fa-phone"></i>
                        </span>
                      </span>
                      <div>
                        <span className="fs-sm fw-medium mb-2 d-block text-color">Call Us 2 4/7</span>
                        <h5 className="mb-0 fs-20">(+25) 2158.2693</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
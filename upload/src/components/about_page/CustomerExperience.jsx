"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CustomerExperience() {
  return (
    <section className="exp-section ptb-100 overflow-hidden">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="image-wrapper">
              <Image src="/assets/images/about/ab-3.jpg" alt="about" className="img-fluid rounded-4" width={1043} height={680} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="exp-content-right">
              <span className="cr-subtitle position-relative primary-text-color fw-semibold">Unique Quality Of Our Team</span>
              <h2 className="mt-4 mb-5">We deliver the better <span className="primary-bg-light primary-text-color">customer</span> experience</h2>
              <p className="mb-40">Natoque sodales sem class libero nunc ornarei parturint ongue integer vivamus rdiculus aliquet gravida maecenas dictum sed facilisi enim diam ultricies sociis nunc feugiat</p>
              <div className="d-flex align-items-center gap-3 gap-sm-4 flex-wrap">
                <Link href="/" className="template-btn primary-btn">Learn More</Link>
                <Link href="/" className="template-btn outline-secondary">Get Started <span className="ms-2"><i className="fas fa-arrow-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"
import Image from 'next/image'
import React from 'react'

export default function TeamInfo() {
  return (
    <div className="cr-service-section pt-100">
      <div className="container-1660">
        <div className="cr-service-box bg-white rounded-top position-relative z-1">
          <div className="row">
            <div className="col-xl-6 align-self-end order-2 order-xl-1">
              <div className="position-relative z-1">
                <Image src="/assets/images/home-2/girl.png" alt="girl" width={1020} height={1101} className="img-fluid" />
                <Image src="/assets/images/shapes/cr-shape.png" alt="shape-image" width={712} height={632} className="position-absolute start-50 bottom-0 translate-middle-x z--1 img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 order-1 order-xl-2">
              <div className="cr-content-right ps-xl-4">
                <span suppressHydrationWarning className="cr-subtitle position-relative fw-semibold primary-text-color wow fadeInUp">Our Team Mates</span>
                <h2 suppressHydrationWarning className="mt-4 mb-32 wow fadeInUp" data-wow-delay="0.1s">Our Team Provide Great <span className="primary-bg-light primary-text-color">Service</span></h2>
                <p suppressHydrationWarning className="mb-5 wow fadeInUp" data-wow-delay="0.3s">Vulputate tincidunt feugiat pharetra primis tortor auctor posuer iaculis nisl phasellus quam pellentesque quis aliquet, volutpat id risus placerat in ad cras. Dapibus arcu habitant</p>
                <div suppressHydrationWarning className="cr-icon-box d-flex gap-3 flex-wrap flex-sm-nowrap wow fadeInUp" data-wow-delay="0.1s">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center primary-text-color rounded-circle flex-shrink-0">
                    <i className="fa-solid fa-book-open"></i>
                  </span>
                  <div>
                    <h6 className="mb-3">Research & Development</h6>
                    <p className="mb-0">Aculis nisl phasellus quam pellentesque quis aliquet, volutpat id risus placerat in ad cras.</p>
                  </div>
                </div>
                <div suppressHydrationWarning className="cr-icon-box d-flex gap-3 flex-wrap flex-sm-nowrap mt-32 wow fadeInUp" data-wow-delay="0.2s">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center primary-text-color rounded-circle flex-shrink-0">
                    <i className="fa-solid fa-people-group"></i>
                  </span>
                  <div>
                    <h6 className="mb-3">Professional Team Mates</h6>
                    <p className="mb-0">Aculis nisl phasellus quam pellentesque quis aliquet, volutpat id risus placerat in ad cras.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
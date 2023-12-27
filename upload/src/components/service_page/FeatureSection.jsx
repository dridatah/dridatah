"use client"
import useProgressBarAnimation from '@/hooks/useProgressBarAnimation';
import Image from 'next/image'
import React from 'react'


export default function FeatureSection() {
  const { ref, animate } = useProgressBarAnimation();
  return (
    <section ref={ref} className="ptb-100 sr-feature-section" style={{ backgroundImage: 'url(/assets/images/banner/sr-bg.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7">
            <div className="sr-feature-box bg-white rounded-4 theme-shadow">
              <span className="cr-subtitle position-relative fw-semibold primary-text-color">Company Features</span>
              <h3 className="mb-5 mt-4">We Provide Best Solution For Your <span className="primary-text-color primary-bg-light px-1">Company</span></h3>
              <div className="row g-5">
                <div className="col-sm-6">
                  <div className="sr-image-box">
                    <span className="icon">
                      <Image src="/assets/images/icons/icon-12.svg" alt="icons" width={50} height={50} />
                    </span>
                    <h5 className="mt-4 mb-20 fs-20">Quality Services</h5>
                    <p className="mb-0">Purpose quality vectors with highly efficient incubate</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sr-image-box">
                    <div className="icon">
                      <Image src="/assets/images/icons/icon-13.svg" alt="icons" width={50} height={50} />
                    </div>
                    <h5 className="mt-4 mb-20 fs-20">Fast Delivery</h5>
                    <p className="mb-0">Purpose quality vectors with highly efficient incubate</p>
                  </div>
                </div>
              </div>
              <div className="sr-service-progress mt-5">

                <div className="cr-progress-single">
                  <div className="d-flex align-items-center justify-content-between gap-3 mb-40">
                    <h6 className="mb-0 fs-18">Product Design</h6>
                    <h6 className="mb-0 fs-18">70%</h6>
                  </div>
                  <div className="progress cr-progress-bar">
                    <div className="progress-bar cr-progress" role="progressbar"
                      style={{
                        width: animate ? '70%' : '0%',
                        backgroundColor: '#5044EB',
                        transition: 'width 1s ease-in-out',
                      }}
                      ref={ref}
                      aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="cr-progress-single mt-32">
                  <div className="d-flex align-items-center justify-content-between gap-3 mb-40">
                    <h6 className="mb-0 fs-18">Industry Expertise</h6>
                    <h6 className="mb-0 fs-18">93%</h6>
                  </div>
                  <div className="cr-progress-bar">
                    <div className="cr-progress" data-percent="93" data-color="#5044EB"></div>
                  </div>
                  <div className="progress cr-progress-bar">
                    <div className="progress-bar cr-progress" role="progressbar"
                      style={{
                        width: animate ? '93%' : '0%',
                        backgroundColor: '#5044EB',
                        transition: 'width 1s ease-in-out',
                      }}
                      aria-valuenow="93" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
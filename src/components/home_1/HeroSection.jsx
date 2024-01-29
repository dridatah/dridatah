import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <section
      className="hero-section position-relative z-1 overflow-hidden"
      style={{ backgroundImage: `url('/assets/images/banner/hero-banner.jpg')` }}
    >
      <span className="circle-shape-1 position-absolute z--1"></span>
      <span className="circle-shape-2 position-absolute z--1"></span>
      <span
        className="circle-shape-3 position-absolute z--1"
        data-parallax='{"y": 40}'
      ></span>
      <span
        className="circle-shape-4 position-absolute z--1"
        data-parallax='{"y": 80}'
      ></span>
      <span
        className="circle-shape-5 position-absolute z--1"
        data-parallax='{"y": 100}'
      ></span>
      <Image
        src="/assets/images/shapes/bulb.png"
        alt="bulb"
        width={120}
        height={110}
        className="position-absolute bulb-shape z--1"
      />
      <Image
        src="/assets/images/shapes/percent.png"
        alt="bulb"
        width={68}
        height={72}
        className="position-absolute percent-shape z--1"
        data-parallax='{"y": 120}'
      />
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="hero-content-left">
              <span
                suppressHydrationWarning
                className="cr-subtitle position-relative text-white wow fadeInUp d-inline-block"
              >50% discount on earlly purchase</span>
              <h1
                suppressHydrationWarning
                className="display-2 mt-4 mb-32 fw-bold wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Creating the best digital solution
              </h1>
              <p
                suppressHydrationWarning
                className="mb-60 text-white lead fw-medium wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Malesuada curabitur nascetur viverra sem pulvinar feugiat curae,
                posuere risus consequat velit bibendum at integer
              </p>
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <Link
                  suppressHydrationWarning
                  href="/about"
                  className="template-btn white-btn wow fadeInUp"
                  data-wow-delay="0.4s"
                >Learn More</Link>
                <Link
                  suppressHydrationWarning
                  href="/appointment"
                  className="template-btn primary-outline wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  Get Started
                  <span className="ms-2">
                    <svg
                      width="15"
                      height="13"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.6875 7.71875L8.6875 12.7188C8.5 12.9062 8.25 13 8 13C7.71875 13 7.46875 12.9062 7.28125 12.7188C6.875 12.3438 6.875 11.6875 7.28125 11.3125L10.5625 8H1C0.4375 8 0 7.5625 0 7C0 6.46875 0.4375 6 1 6H10.5625L7.28125 2.71875C6.875 2.34375 6.875 1.6875 7.28125 1.3125C7.65625 0.90625 8.3125 0.90625 8.6875 1.3125L13.6875 6.3125C14.0938 6.6875 14.0938 7.34375 13.6875 7.71875Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-xl-none">
            <Image
              src="/assets/images/home-1/hero-sm.png"
              alt="hero"
              width={520}
              height={737}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/home-1/hero.png"
        alt="hero"
        width={894}
        height={797}
        className="img-fluid hero-image"
      />
    </section>
  )
}
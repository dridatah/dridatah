"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="hm2-hero-section position-relative z-1 overflow-hidden">
      <Image
        src="/assets/images/shapes/hero-shape.png"
        alt="hero shape"
        className="hero-shape position-absolute z--1 end-0 top-0"
        width={1025}
        height={940}
      />
      <Image
        src="/assets/images/shapes/hero-shape-blue.png"
        alt="hero shape"
        className="blue hero-shape position-absolute z--1 end-0 top-0"
        width={1025}
        height={940}
      />
      <Image
        src="/assets/images/shapes/hero-shape-purple.png"
        alt="hero shape"
        className="purple hero-shape position-absolute z--1 end-0 top-0"
        width={1025}
        height={940}
      />
      <Image
        src="/assets/images/shapes/hero-shape-red.png"
        alt="hero shape"
        className="red hero-shape position-absolute z--1 end-0 top-0"
        width={1025}
        height={940}
      />
      <Image
        src="/assets/images/shapes/hero-shape-green.png"
        alt="hero shape"
        className="green hero-shape position-absolute z--1 end-0 top-0"
        width={1025}
        height={940}
      />
      <Image
        src="/assets/images/shapes/hero-shape-orange.png"
        alt="hero shape"
        className="orange hero-shape position-absolute z--1 end-0 top-0"
        width={1025}
        height={940}
      />
      <Image
        src="/assets/images/shapes/blur-layer.png"
        alt="layer blur"
        className="position-absolute start-0 top-0 z--1"
        width={900}
        height={940}
      />
      <span
        className="circle-shape-1 position-absolute z--1"
        data-parallax='{"y": 60}'
      ></span>
      <span
        className="circle-shape-2 position-absolute z--1"
        data-parallax='{"x": 80}'
      ></span>
      <span
        className="circle-shape-3 position-absolute z--1"
        data-parallax='{"y": -60}'
      ></span>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 col-md-10">
            <div className="hm2-hero-content">
              <h1
                suppressHydrationWarning
                className="display-2 fw-bold mb-4 wow fadeInUp"
              >
                Your Development Partner for Innovative{" "}
                <span className="primary-bg-light primary-text-color px-2">
                  Startups.
                </span>
              </h1>
              <p
                suppressHydrationWarning
                className="mb-5 lead fw-medium wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Don't let your brilliant concepts stay on the whiteboard.
                Dridatah partners with ambitious startups to transform your
                innovative ideas into reality through custom-built software
                solutions.
              </p>
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <Link
                  href="/contact"
                  suppressHydrationWarning
                  className="template-btn primary-btn wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Get started
                </Link>
                {/* <Link
                  href="/#our-service"
                  suppressHydrationWarning
                  className="template-btn outline-secondary wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Learn More
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
                        fill="#1F1F1F"
                      />
                    </svg>
                  </span>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="hero-image">
              <Image
                src="/assets/images/home-2/hero-man.png"
                alt="hero man"
                className="hero-man"
                width={736}
                height={704}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

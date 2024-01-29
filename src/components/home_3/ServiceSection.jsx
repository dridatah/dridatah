"use client"
import React from 'react'
import Slider from "react-slick";
import SingleServiceLayoutTwo from '../single/service/SingleServiceLayoutTwo';
export default function ServiceSection() {
  // Slider config 
  const settings = {
    className: "hm2-service-slider slider-spacing mt-60",
    slidesToShow: 3,
    autoplay: true,
    speed: 700,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }
  return (
    <section className="hm3-service-section hm3-light-bg ptb-100" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="text-center">
              <span suppressHydrationWarning className="cr-subtitle position-relative primary-text-color fw-semibold wow fadeInUp d-inline-block">50% discount on early purchase</span>
              <h2 suppressHydrationWarning className="mb-0 mt-4 wow fadeInUp">Our Service <span className="primary-bg-light primary-text-color px-1 text-italic fw-normal">Area</span></h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <SingleServiceLayoutTwo
            title={`Web Development`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-1.svg`}
          />
          <SingleServiceLayoutTwo
            title={`UI / UX Design`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-2.svg`}
          />
          <SingleServiceLayoutTwo
            title={`Graphics Design`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
          />
          <SingleServiceLayoutTwo
            title={`Digital Marketing`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-4.svg`}
          />
        </Slider>
      </div>
    </section>
  )
}
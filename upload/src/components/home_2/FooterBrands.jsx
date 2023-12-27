"use client"
import React from 'react'
import Slider from "react-slick";

export default function FooterBrands() {

  // Slider config 
  const settings = {
    className: 'cr2-footer-brand-slider',
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    speed: 700,
    speed: 2500,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          cssEase: '',

        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="cr2-footer-brands overflow-hidden">
      <div className="container">
        <Slider {...settings}>
          <span className="text-white fs-sm text-uppercase fw-bold">Facebook</span>
          <span className="text-white fs-sm text-uppercase fw-bold">Instagram</span>
          <span className="text-white fs-sm text-uppercase fw-bold">Twitter</span>
          <span className="text-white fs-sm text-uppercase fw-bold">Discord</span>
          <span className="text-white fs-sm text-uppercase fw-bold">Pinterest</span>
          <span className="text-white fs-sm text-uppercase fw-bold">Skype</span>
          <span className="text-white fs-sm text-uppercase fw-bold">Slack</span>
        </Slider>
      </div>
    </div>
  )
}

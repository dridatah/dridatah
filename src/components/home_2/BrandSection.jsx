"use client"
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
export default function BrandSection() {
  // Slider config 
  const settings = {
    className: "cr2-brand-slider",
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
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
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          cssEase: '',
        }
      }

    ],

  };
  return (
    <div className="cr2-brand-section pb-100">
      <div className="container">
        <Slider {...settings}>
          <div className="brand-image">
            <Image src="assets/images/brands/tinder.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/walmart.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/amazon.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/google.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/slack.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/airbnb.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/tinder.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image src="assets/images/brands/walmart.svg" alt="not found" className="img-fluid"
              width={140}
              height={60}
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}
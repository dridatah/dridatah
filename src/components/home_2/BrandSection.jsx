"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
export default function BrandSection() {
  // Slider config
  const settings = {
    className: "cr2-brand-slider",
    slidesToShow: 6,
    arrows: false,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          cssEase: "",
        },
      },
    ],
  };
  // metarck
  return (
    <div className="cr2-brand-section pb-100">
      <div className="container">
        <Slider {...settings}>
          <div className="brand-image">
            <Image
              src="assets/images/brands/mavensmark.webp"
              alt="not found"
              className="img-fluid grayscale-invert"
              width={125}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image
              src="assets/images/brands/infin.png"
              alt="not found"
              className="img-fluid grayscale pt-2"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image
              src="assets/images/brands/dailyrevs.png"
              alt="not found"
              className="img-fluid grayscale-invert pt-2"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image
              src="assets/images/brands/mavenstry.webp"
              alt="not found"
              className="img-fluid grayscale-invert"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image
              src="assets/images/brands/upc.png"
              alt="not found"
              className="img-fluid grayscale-invert"
              width={140}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image
              src="assets/images/brands/vione.png"
              alt="not found"
              className="img-fluid grayscale"
              width={160}
              height={60}
            />
          </div>
          <div className="brand-image">
            <Image
              src="assets/images/brands/amruta.png"
              alt="not found"
              className="img-fluid grayscale"
              width={110}
              height={55}
            />
          </div>
          <div className="brand-image mt-2">
            <Image
              src="assets/images/brands/arkbuilders.png"
              alt="not found"
              className="img-fluid grayscale"
              width={140}
              height={55}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

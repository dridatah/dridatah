"use client"
import React from 'react'
import Slider from 'react-slick';
import BrandItem from '../single/brand/BrandItem';

export default function BrandSection() {
  // Slider config 
  const settings = {
    className: "hm4-brand-slider crn-hm4-brand-slider mt-100",
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

  };
  return (
    <div className="hm4-brand-section  hm3-light-bg ptb-100 overflow-hidden">
      <div className="container">
        <Slider {...settings}>

          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`Figma`}
            logo={`/assets/images/icons/slack.svg`}
            percent={`100%`}
          />
          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`Photoshop`}
            logo={`/assets/images/icons/photoshop.svg`}
            percent={`98%`}
          />
          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`Illustrator`}
            logo={`/assets/images/icons/illustrator.svg`}
            percent={`88%`}
          />
          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`XD`}
            logo={`/assets/images/icons/xd.svg`}
            percent={`96%`}
          />
          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`Sketch`}
            logo={`/assets/images/icons/sketch.svg`}
            percent={`97%`}
          />
          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`Photoshop`}
            logo={`/assets/images/icons/photoshop.svg`}
            percent={`98%`}
          />
          <BrandItem
            wrapper_class={`hm4-brand-single`}
            title={`Illustrator`}
            logo={`/assets/images/icons/illustrator.svg`}
            percent={`88%`}
          />
        </Slider>
      </div>
    </div>
  )
}
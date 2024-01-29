"use client"
import React from 'react'
import Slider from 'react-slick'
import BrandItem from '../single/brand/BrandItem'

export default function BrandSlider() {
  // Slider config 
  const settings = {
    className: "hm5-brand-slider mt-100",
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <div className="ptb-100 overflow-hidden">
      <Slider {...settings}>
        <BrandItem
          title={`Figma`}
          logo={`/assets/images/icons/slack.svg`}
          percent={`100%`}
          theme={`white`}
        />
        <BrandItem
          title={`Photoshop`}
          logo={`/assets/images/icons/photoshop.svg`}
          percent={`98%`}
          theme={`white`}
        />
        <BrandItem
          title={`Illustrator`}
          logo={`/assets/images/icons/illustrator.svg`}
          percent={`88%`}
          theme={`white`}
        />
        <BrandItem
          title={`XD`}
          logo={`/assets/images/icons/xd.svg`}
          percent={`96%`}
          theme={`white`}
        />
        <BrandItem
          title={`Sketch`}
          logo={`/assets/images/icons/sketch.svg`}
          percent={`97%`}
          theme={`white`}
        />
        <BrandItem
          title={`Photoshop`}
          logo={`/assets/images/icons/photoshop.svg`}
          percent={`98%`}
          theme={`white`}
        />
        <BrandItem
          title={`Illustrator`}
          logo={`/assets/images/icons/illustrator.svg`}
          percent={`88%`}
          theme={`white`}
        />

      </Slider>
    </div>
  )
}
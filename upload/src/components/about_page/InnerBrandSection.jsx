"use client"
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick';

export default function InnerBrandSection() {
  // Prev arrow
  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="prev-btn"><i className="fas fa-arrow-left"></i></button>
  );

  // Next arrow
  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="next-btn"><i className="fas fa-arrow-right"></i></button>
  );

  // Slider config 
  const settings = {
    className: "crb-brand-slider slider-spacing mt-5",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    slidesToShow: 5,
    speed: 700,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="crb-brand-section ptb-100">
      <div className="container">
        <div className="crb-brand-area bg-white theme-shadow rounded-5">
          <div className="row">
            <div className="col-xl-6">
              <div className="section-title">
                <span className="position-relative primary-text-color fw-semibold cr-subtitle">50% discount on early purchase</span>
                <h2 className="mt-4 mb-0">Unique <span className="primary-text-color primary-bg-light">Brands Work</span></h2>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            <div className="single-item">
              <Image src="/assets/images/brands/1.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>
            <div className="single-item">
              <Image src="/assets/images/brands/2.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>
            <div className="single-item">
              <Image src="/assets/images/brands/3.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>
            <div className="single-item">
              <Image src="/assets/images/brands/4.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>
            <div className="single-item">
              <Image src="/assets/images/brands/5.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>
            <div className="single-item">
              <Image src="/assets/images/brands/1.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>
            <div className="single-item">
              <Image src="/assets/images/brands/2.svg" alt="brand" className="img-fluid" width={138} height={36} />
            </div>

          </Slider>
        </div>
      </div>
    </div>
  )
}
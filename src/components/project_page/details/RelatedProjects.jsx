"use client"
import React from 'react'
import SinglePortfolioLayoutFour from '../../single/portfolio/SinglePortfolioLayoutFour'
import Slider from 'react-slick';

export default function RelatedProjects() {
  // Slider config 
  const settings = {
    className: "related-projects-slider slider-spacing",
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
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <section className="pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="text-center">
              <span className="cr-subtitle position-relative fw-semibold primary-text-color">Similar Projects</span>
              <h2 className="mt-4 mb-60">Our Similar <span className="primary-bg-light primary-text-color ps-1">Projects</span></h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/1.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/2.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/3.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/4.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/5.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/6.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/7.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/8.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col`}
            thumbnail={`/assets/images/projects/9.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
        </Slider>
      </div>
    </section>
  )
}
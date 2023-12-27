"use client"
import React from 'react'
import Slider from "react-slick";
import SinglePortfolioLayoutOne from '../single/portfolio/SinglePortfolioLayoutOne';

export default function Portfolio() {

  // Prev arrow
  const CustomPrevArrow = ({ onClick }) => (
    <button className="prev-arrow" onClick={onClick}>
      <i className="fas fa-arrow-left"></i>
    </button>
  );

  // Next arrow
  const CustomNextArrow = ({ onClick }) => (
    <button className="next-arrow" onClick={onClick}>
      <i className="fas fa-arrow-right"></i>
    </button>
  );


  // Slider config 
  const settings = {
    slidesToShow: 1,
    className: "cr-pf-slider",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  return (
    <section className="portfolio-section ptb-100 light-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="section-title">
              <span suppressHydrationWarning
                className="cr-subtitle position-relative primary-text-color fw-semibold d-inline-block wow fadeInUp"
              >50% discount on early purchase</span>
              <h2 suppressHydrationWarning className="mb-0 mt-4 wow fadeInUp" data-wow-delay="0.2s">
                Our Creative
                <span className="primary-text-color primary-bg-light px-2"
                >Works</span>
              </h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <div className="single-item mt-5">
            <div className="row g-4">
              <SinglePortfolioLayoutOne
                title={`Creative Business Solution`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-1.jpg`}
                col={`col-lg-6`}
                data_wow_delay={`0.1s`}
              />

              <SinglePortfolioLayoutOne
                title={`Web Development Service`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-2.jpg`}
                col={`col-lg-6`}
                data_wow_delay={`0.2s`}
              />
              <SinglePortfolioLayoutOne
                title={`Shopify Theme Development`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-3.jpg`}
                col={`col-xl-4 col-md-6`}
                data_wow_delay={`0.3s`}
              />
              <SinglePortfolioLayoutOne
                title={`WordPress Theme Development`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-4.jpg`}
                col={`col-xl-4 col-md-6`}
                data_wow_delay={`0.4s`}
              />
              <SinglePortfolioLayoutOne
                title={`Custom WP Plugin Development`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-5.jpg`}
                col={`col-xl-4 col-md-6`}
                data_wow_delay={`0.5s`}
              />

            </div>
          </div>
          <div className="single-item mt-5">
            <div className="row g-4">
              <SinglePortfolioLayoutOne
                title={`Creative Business Solution`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-1.jpg`}
                col={`col-lg-6`}
                data_wow_delay={`0.1s`}
              />

              <SinglePortfolioLayoutOne
                title={`Web Development Service`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-2.jpg`}
                col={`col-lg-6`}
                data_wow_delay={`0.2s`}
              />
              <SinglePortfolioLayoutOne
                title={`Shopify Theme Development`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-3.jpg`}
                col={`col-xl-4 col-md-6`}
                data_wow_delay={`0.3s`}
              />
              <SinglePortfolioLayoutOne
                title={`WordPress Theme Development`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-4.jpg`}
                col={`col-xl-4 col-md-6`}
                data_wow_delay={`0.4s`}
              />
              <SinglePortfolioLayoutOne
                title={`Custom WP Plugin Development`}
                des={`App Development, Product Design`}
                link={`/project/details`}
                thumbnail={`/assets/images/home-1/pf-5.jpg`}
                col={`col-xl-4 col-md-6`}
                data_wow_delay={`0.5s`}
              />

            </div>
          </div>
        </Slider>

      </div>
    </section>
  )
}
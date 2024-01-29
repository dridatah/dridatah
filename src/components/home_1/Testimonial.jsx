"use client"
import React from 'react'
import Slider from "react-slick";
import SingleTestimonialLayountOne from '../single/testimonial/SingleTestimonialLayountOne';

export default function Testimonial() {

  // Prev arrow
  const CustomPrevArrow = ({ onClick }) => (
    <button className="prev-arrow" onClick={onClick}>
      <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9961 1.1875L1.06641 19.2227C0.75 19.5391 0.75 20.0664 1.06641 20.3828L18.9961 38.418C19.418 38.7344 19.9453 38.7344 20.2617 38.418C20.5781 38.1016 20.5781 37.4688 20.2617 37.1523L3.70312 20.6992H47.1562C47.6836 20.6992 48 20.2773 48 19.75C48 19.3281 47.6836 18.9062 47.1562 18.9062H3.70312L20.2617 2.45312C20.5781 2.13672 20.5781 1.50391 20.2617 1.1875C19.9453 0.871094 19.3125 0.871094 18.9961 1.1875Z" fill="white" />
      </svg>
    </button>
  );

  // Next arrow
  const CustomNextArrow = ({ onClick }) => (
    <button className="next-arrow" onClick={onClick}>
      <svg width="48" height="39" viewBox="0 0 48 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.0039 1.1875L46.9336 19.2227C47.25 19.5391 47.25 20.0664 46.9336 20.3828L29.0039 38.418C28.582 38.7344 28.0547 38.7344 27.7383 38.418C27.4219 38.1016 27.4219 37.4688 27.7383 37.1523L44.2969 20.6992H0.84375C0.316406 20.6992 0 20.2773 0 19.75C0 19.3281 0.316406 18.9062 0.84375 18.9062H44.2969L27.7383 2.45312C27.4219 2.13672 27.4219 1.50391 27.7383 1.1875C28.0547 0.871094 28.6875 0.871094 29.0039 1.1875Z" fill="white" /></svg>
    </button>
  );


  // Slider config 
  const settings = {
    slidesToShow: 1,
    autoplay: true,
    speed: 700,
    className: "feedback-slider  mt-60 slider-spacing",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <section
      className="feedback-section crnext-feedback-slider ptb-100 dark-bg-color position-relative z-1 overflow-hidden"
    >
      <span className="circle-shape-1 position-absolute z--1"></span>
      <span className="circle-shape-2 position-absolute z--1"></span>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="section-title">
              <span className="cr-subtitle fw-semibold text-white position-relative"
              >Our Testimonial</span>
              <h2 className="mb-0 text-white mt-4">Customer Feedbacks</h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <SingleTestimonialLayountOne
            title={`“Penatibus etlectus quis sapien nibh fringilla varius elemenm blandit dui miestulum pretium cursusa augue praesent proin justo netus tar vestibulum taciti fringilla ultrices donec netus luctus mus sapien turpis varius libero lines”`}
            author={`Andrew Smith`}
            designation={`COO at Company`}
            avatar={`/assets/images/client/client-1.png`}
          />
          <SingleTestimonialLayountOne
            title={`“Penatibus etlectus quis sapien nibh fringilla varius elemenm blandit dui miestulum pretium cursusa augue praesent proin justo netus tar vestibulum taciti fringilla ultrices donec netus luctus mus sapien turpis varius libero lines”`}
            author={`Jhon Doe`}
            designation={`COO at Company`}
            avatar={`/assets/images/client/client-2.jpg`}
          />
          <SingleTestimonialLayountOne
            title={`“Penatibus etlectus quis sapien nibh fringilla varius elemenm blandit dui miestulum pretium cursusa augue praesent proin justo netus tar vestibulum taciti fringilla ultrices donec netus luctus mus sapien turpis varius libero lines”`}
            author={`Faky Lak`}
            designation={`COO at Company`}
            avatar={`/assets/images/client/client-3.jpg`}
          />

        </Slider>

      </div>
    </section>
  )
}
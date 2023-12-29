"use client";
import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SingleTestimonialLayountTwo from "../single/testimonial/SingleTestimonialLayountTwo";
export default function TestimonialSection() {
  // Slider config
  const settings = {
    className: "cr2-feedback-slider",
    slidesToShow: 4,
    vertical: true,
    arrows: false,
    autoplay: true,
    speed: 700,
    verticalSwiping: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className="cr2-feedback-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="cr2-feedback-left ptb-100">
              <span className="cr-subtitle position-relative text-white fw-semibold">
                Customer Testimonial
              </span>
              <h2 className="mt-4 mb-32 text-white">
                What our customers have to say
              </h2>
              <p className="mb-60 text-white mx-470 fw-medium">
                Hear How Dridatah Delights Clients with Transformative
                Solutions.
              </p>
              {/* <div className="d-flex align-items-center cr2-feedback-counter">
                <div>
                  <h3 className="mb-1 text-white fs-40">
                    <CountUp end={1200} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                  </h3>
                  <span className="text-white fw-medium">
                    Full 5 Star review
                  </span>
                </div>
                <div>
                  <h3 className="mb-1 text-white fs-40">4.8</h3>
                  <span className="text-white fw-medium">
                    Out of 5 average rating
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="cr2-feedback-vertical-slider">
              <Slider {...settings}>
                <SingleTestimonialLayountTwo
                  title={`“Dridatah has been with us to develop the platform as it is since the stage of ideation of Entities. The budget-friendly approach ensures satisfaction, enabling entrepreneurs to iterate freely until their vision is realized without feeling financially burdened.”`}
                  author={`Infin Entities`}
                  designation={`Founder`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Mavensmark takes pride in legally structuring and establishing Dridatah as a Private Limited Company. Working with the talented team led by Varun has consistently delivered top-notch tech solutions. Dridatah's role in crafting our outstanding website has been crucial since 2017, contributing significantly to Mavensmark's online presence and branding.”`}
                  author={`Mavensmark`}
                  designation={`Founder and Chief Consultant`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Mavenstry values the partnership with Dridatah beyond service agreements. Their profound understanding and swift assistance during critical tech issues, especially with cloud and platform needs, make Dridatah an invaluable support pillar for Mavenstry since its inception.”`}
                  author={`Mavenstry`}
                  designation={`Founder and CEO`}
                  avatar={`/assets/images/client/client-1.png`}
                />
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

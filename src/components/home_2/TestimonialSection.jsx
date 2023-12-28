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
              <div className="d-flex align-items-center cr2-feedback-counter">
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
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="cr2-feedback-vertical-slider">
              <Slider {...settings}>
                <SingleTestimonialLayountTwo
                  title={`“Mattis aliquam sapien leo a hac potenti pellentesque neque man mollis, vehicula turpis euismod torquent congue posuere dis arcu risus sociis sociosqu viverra egestas scelerisque cur vel porttitor, cursus varius blandit neque”`}
                  author={`Andrew Smith`}
                  designation={`Director TMS.Inc`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Mattis aliquam sapien leo a hac potenti pellentesque neque man mollis, vehicula turpis euismod torquent congue posuere dis arcu risus sociis sociosqu viverra egestas scelerisque cur vel porttitor, cursus varius blandit neque”`}
                  author={`Andrew Smith`}
                  designation={`Director TMS.Inc`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Mattis aliquam sapien leo a hac potenti pellentesque neque man mollis, vehicula turpis euismod torquent congue posuere dis arcu risus sociis sociosqu viverra egestas scelerisque cur vel porttitor, cursus varius blandit neque”`}
                  author={`Andrew Smith`}
                  designation={`Director TMS.Inc`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Mattis aliquam sapien leo a hac potenti pellentesque neque man mollis, vehicula turpis euismod torquent congue posuere dis arcu risus sociis sociosqu viverra egestas scelerisque cur vel porttitor, cursus varius blandit neque”`}
                  author={`Andrew Smith`}
                  designation={`Director TMS.Inc`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Mattis aliquam sapien leo a hac potenti pellentesque neque man mollis, vehicula turpis euismod torquent congue posuere dis arcu risus sociis sociosqu viverra egestas scelerisque cur vel porttitor, cursus varius blandit neque”`}
                  author={`Andrew Smith`}
                  designation={`Director TMS.Inc`}
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

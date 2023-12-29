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
                  title={`“Dridatah has been with us to develop the platform as it is since the stage of ideation of Entities. We are extremely happy and satisfied with the work and output they have provided to make the platform into a reality. They work in an extreme budget friendly manner that we never feel like our pocket is heavily charged by the tech team. This gives opportunity to all budding entrepreneurs to try and fail and repeat the cycle till the vision and mission is accomplished.”`}
                  author={`Infin Entities`}
                  designation={`Founder`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“It is an absolute pride to be the person who got the opportunity to legally structure and form Dridatah into a Private Limited Company and subsequently work with these very talented, professional and friendly techie entrepreneurs in all my tech related endeavours thereafter. I must say, the quality of output is cent percent assured if tech building is managed by Dridatah headed by Varun and Co. I received so much appreciation for our excellent website and Dridatah played a pivotal role in the online presence and branding of Mavensmark since 2017.”`}
                  author={`Mavensmark`}
                  designation={`Founder and Chief Consultant`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“The association of Mavenstry with Dridatah goes beyond service level agreements. They have showcased extreme levels of understanding when we faced some critical problems with respect to our tech side. Varun and team were always available almost immediately to support us with the cloud, platform and other related requirements. Dridatah has been the pillar of support for Mavenstry since our inception.”`}
                  author={`Mavenstry`}
                  designation={`Founder and CEO`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“Dridatah has been with us to develop the platform as it is since the stage of ideation of Entities. We are extremely happy and satisfied with the work and output they have provided to make the platform into a reality. They work in an extreme budget friendly manner that we never feel like our pocket is heavily charged by the tech team. This gives opportunity to all budding entrepreneurs to try and fail and repeat the cycle till the vision and mission is accomplished.”`}
                  author={`Infin Entities`}
                  designation={`Founder`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“It is an absolute pride to be the person who got the opportunity to legally structure and form Dridatah into a Private Limited Company and subsequently work with these very talented, professional and friendly techie entrepreneurs in all my tech related endeavours thereafter. I must say, the quality of output is cent percent assured if tech building is managed by Dridatah headed by Varun and Co. I received so much appreciation for our excellent website and Dridatah played a pivotal role in the online presence and branding of Mavensmark since 2017.”`}
                  author={`Mavensmark`}
                  designation={`Founder and Chief Consultant`}
                  avatar={`/assets/images/client/client-1.png`}
                />
                <SingleTestimonialLayountTwo
                  title={`“The association of Mavenstry with Dridatah goes beyond service level agreements. They have showcased extreme levels of understanding when we faced some critical problems with respect to our tech side. Varun and team were always available almost immediately to support us with the cloud, platform and other related requirements. Dridatah has been the pillar of support for Mavenstry since our inception.”`}
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

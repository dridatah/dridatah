"use client"
import React from 'react'
import Slider from "react-slick";
import SingleTestimonialLayountThree from '../single/testimonial/SingleTestimonialLayountThree';
export default function TestimonialSection() {
  // Slider config 
  const settings = {
    className: "hm3-feedback-slider slider-spacing mt-60",
    slidesToShow: 3,
    autoplay: true,
    speed: 700,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }
  return (
    <section className="hm3-feedback-section hm3-light-bg pb-100" id="feedback">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="text-center">
              <span suppressHydrationWarning className="cr-subtitle position-relative fw-semibold primary-text-color wow fadeInUp">Testimonial</span>
              <h2 suppressHydrationWarning className="mt-4 wow fadeInUp" data-wow-delay="0.2s">Trusted by Global <span className="primary-bg-light primary-text-color px-1 text-italic fw-normal">Customers</span></h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <SingleTestimonialLayountThree
            title={`"Creative Designer"`}
            des={`Quis ullamc senectus primis urna penatibus ultricies orci eiaculis aenean rutrum sociis dictum facilisi porttitor. Fermentum integer tempor suspendisse erat.`}
            author={`Andrew Cameron`}
            designation={`Content Writer`}
            avatar={`/assets/images/client/client-1.png`}
            ratings={5}
          />
          <SingleTestimonialLayountThree
            title={`"Creative Designer"`}
            des={`Quis ullamc senectus primis urna penatibus ultricies orci eiaculis aenean rutrum sociis dictum facilisi porttitor. Fermentum integer tempor suspendisse erat.`}
            author={`Andrew Cameron`}
            designation={`Content Writer`}
            avatar={`/assets/images/client/client-2.jpg`}
            ratings={5}
          />
          <SingleTestimonialLayountThree
            title={`"Creative Designer"`}
            des={`Quis ullamc senectus primis urna penatibus ultricies orci eiaculis aenean rutrum sociis dictum facilisi porttitor. Fermentum integer tempor suspendisse erat.`}
            author={`Andrew Cameron`}
            designation={`Content Writer`}
            avatar={`/assets/images/client/client-3.jpg`}
            ratings={5}
          />
          <SingleTestimonialLayountThree
            title={`"Creative Designer"`}
            des={`Quis ullamc senectus primis urna penatibus ultricies orci eiaculis aenean rutrum sociis dictum facilisi porttitor. Fermentum integer tempor suspendisse erat.`}
            author={`Andrew Cameron`}
            designation={`Content Writer`}
            avatar={`/assets/images/client/client-2.jpg`}
            ratings={5}
          />

        </Slider>
      </div>
    </section>
  )
}
"use client";
import React from "react";
import Slider from "react-slick";
import SingleServiceLayoutTwo from "../single/service/SingleServiceLayoutTwo";
import Image from "next/image";
import { PropTypes } from "prop-types";

/**
 * Service Section Component
 * @param {string} props.wrapper_class - The CSS class for the wrapper element of the service section.
 */

export default function ServiceSection({ wrapper_class }) {
  // Slider config
  const settings = {
    className: "hm2-service-slider slider-spacing mt-60",
    slidesToShow: 3,
    autoplay: true,
    speed: 700,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`hm2-service-section pb-100 overflow-hidden ${wrapper_class}`}
    >
      <div className="container pt-100 position-relative z-1">
        <Image
          src="/assets/images/shapes/net-vector.png"
          className="position-absolute net-vector top-0 end-0 z--1"
          alt="vector"
          width={1576}
          height={840}
        />
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="text-center">
              <span
                suppressHydrationWarning
                className="cr-subtitle position-relative primary-text-color fw-semibold wow fadeInUp d-inline-block"
              >
                50% discount on early purchase
              </span>
              <h2 suppressHydrationWarning className="mb-0 mt-4 wow fadeInUp">
                Our Service{" "}
                <span className="primary-bg-light primary-text-color px-2">
                  Area
                </span>
              </h2>
            </div>
          </div>
        </div>
        <Slider {...settings}>
          <SingleServiceLayoutTwo
            title={`Web Development`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-1.svg`}
          />
          <SingleServiceLayoutTwo
            title={`UI / UX Design`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-2.svg`}
          />
          <SingleServiceLayoutTwo
            title={`Graphics Design`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
          />
          <SingleServiceLayoutTwo
            title={`Digital Marketing`}
            des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-4.svg`}
          />
        </Slider>
      </div>
    </div>
  );
}

// PropTypes for the ServiceSection component
ServiceSection.propTypes = {
  wrapper_class: PropTypes.string,
};

"use client";
import React from "react";
import SingleServiceLayoutOne from "../single/service/SingleServiceLayoutOne";

export default function ServiceSection() {
  return (
    <section className="service-section ptb-100 dark-bg-color position-relative z-1 overflow-hidden">
      <span className="circle-shape-1 position-absolute z--1"></span>
      <span className="circle-shape-2 position-absolute z--1"></span>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              {/* <span
                suppressHydrationWarning
                className="cr-subtitle text-white fw-semibold position-relative d-inline-block wow fadeInUp"
              >
                50% discount on early purchase
              </span> */}
              <h2
                suppressHydrationWarning
                className="text-white mt-3 mb-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Our Service Areaasda
              </h2>
              <p
                suppressHydrationWarning
                className="mb-0 text-gray fw-medium wow fadeInUp lead"
                data-wow-delay="0.3s"
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration, by injected humour.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4 mt-60">
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Web Development`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-1.svg`}
            data_wow_delay={`0.1s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Digital Marketingt`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-2.svg`}
            data_wow_delay={`0.2s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Technology Solution`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-4.svg`}
            data_wow_delay={`0.3s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Content Strategy`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
            data_wow_delay={`0.4s`}
          />
        </div>
      </div>
    </section>
  );
}

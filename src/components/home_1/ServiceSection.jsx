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
                Our Service Area
              </h2>
              <p
                suppressHydrationWarning
                className="mb-0 text-white fw-medium wow fadeInUp lead"
                data-wow-delay="0.3s"
              >
                We understand the unique challenges of startups. Dridatah
                tailors its services to your specific needs, driving your
                startup's growth from initial concept to ongoing maintenance,
                every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4 mt-60">
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Product Design`}
            des={`Craft user-centric experiences that propel your startup's success.`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-1.svg`}
            data_wow_delay={`0.1s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`UI Design`}
            des={`Design stunning interfaces that captivate your audience and elevate your brand.`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-2.svg`}
            data_wow_delay={`0.2s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Development`}
            des={`Build a robust and scalable software foundation for your innovative ideas.`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-4.svg`}
            data_wow_delay={`0.3s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Testing`}
            des={`Ensure seamless and bug-free user experiences with meticulous testing across all platforms.`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
            data_wow_delay={`0.4s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`DevOps`}
            des={`Streamline delivery and deployment, allowing you to focus on what matters most.`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
            data_wow_delay={`0.4s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-md-6`}
            title={`Continuous Support & Maintenance`}
            des={`Your long-term tech partner, keeping your software performing at its peak for sustained growth.`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
            data_wow_delay={`0.4s`}
          />
        </div>
      </div>
    </section>
  );
}

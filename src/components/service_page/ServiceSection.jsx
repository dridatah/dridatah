"use client"
import React from 'react'
import SingleServiceLayoutTwo from '../single/service/SingleServiceLayoutTwo'

export default function ServiceSection() {
  return (
    <section className="service-section ptb-100 bg-light-white">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div suppressHydrationWarning className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <SingleServiceLayoutTwo
              title={`Web Development`}
              des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
              link={`/service/details`}
              thumbnail={`/assets/images/icons/icon-1.svg`}
            />
          </div>
          <div suppressHydrationWarning className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <SingleServiceLayoutTwo
              title={`Digital Marketing`}
              des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
              link={`/service/details`}
              thumbnail={`/assets/images/icons/icon-2.svg`}
            />
          </div>
          <div suppressHydrationWarning className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <SingleServiceLayoutTwo
              title={`Content Strategy`}
              des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
              link={`/service/details`}
              thumbnail={`/assets/images/icons/icon-3.svg`}
            />

          </div>
          <div suppressHydrationWarning className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <SingleServiceLayoutTwo
              title={`Software Development`}
              des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
              link={`/service/details`}
              thumbnail={`/assets/images/icons/icon-4.svg`}
            />

          </div>
          <div suppressHydrationWarning className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <SingleServiceLayoutTwo
              title={`Pro Video Editing`}
              des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
              link={`/service/details`}
              thumbnail={`/assets/images/icons/icon-5.svg`}
            />
          </div>
          <div suppressHydrationWarning className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <SingleServiceLayoutTwo
              title={`Product Design`}
              des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into`}
              link={`/service/details`}
              thumbnail={`/assets/images/icons/icon-6.svg`}
            />
          </div>
        </div>
      </div>
    </section >
  )
}
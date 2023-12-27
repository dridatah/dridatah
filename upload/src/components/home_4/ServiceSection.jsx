"use client"
import React from 'react'
import SingleServiceLayoutOne from '../single/service/SingleServiceLayoutOne'
import HappyClients from './HappyClients'

export default function ServiceSection() {
  return (
    <section className="hm4-service-section ptb-100 overflow-hidden" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center">
              <span className="cr-subtitle position-relative text-white fw-semibold">What's Going On</span>
              <h3 className="mt-32 mb-80 text-white">My Service Area</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4 mt-60">
          <SingleServiceLayoutOne
            wrapper_class={`col-xl-6`}
            title={`Web Development`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-1.svg`}
            data_wow_delay={`0.1s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-xl-6`}
            title={`Digital Marketingt`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-2.svg`}
            data_wow_delay={`0.2s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-xl-6`}
            title={`Technology Solution`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-4.svg`}
            data_wow_delay={`0.3s`}
          />
          <SingleServiceLayoutOne
            wrapper_class={`col-xl-6`}
            title={`Content Strategy`}
            des={`There are many variations of passages of lorem Ipsum available
                  but to the majority have suffered but the into majority have
                  suffered alteration`}
            link={`/service/details`}
            thumbnail={`/assets/images/icons/icon-3.svg`}
            data_wow_delay={`0.4s`}
          />
        </div>
        <HappyClients />
      </div>
    </section>
  )
}
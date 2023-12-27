"use client"
import React from 'react'
import SingleDream from '../single/dream/SingleDream';

export default function DreamerSection() {
  return (
    <section className="dreamer-section ptb-100 overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="text-center mb-5">
              <span suppressHydrationWarning className="cr-subtitle position-relative primary-text-color fw-semibold wow fadeInUp d-inline-block">50% discount on early purchase</span>
              <h2 suppressHydrationWarning className="mt-4 wow fadeInUp" data-wow-delay="0.2s">An original team of creators designers & <span className="primary-text-color primary-bg-light px-2">dreamers.</span></h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          <div className="col-xl-4 col-md-6">
            <SingleDream
              wrapperClass={`primary`}
              countNumber={86}
              icon={`/assets/images/icons/icon-9.svg`}
              des={`People who are committed to their management tasks`}
            />

          </div>
          <div className="col-xl-4 col-md-6">
            <SingleDream
              wrapperClass={`sea-color`}
              countNumber={96}
              icon={`/assets/images/icons/icon-10.svg`}
              des={`People who are committed to their management tasks`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SingleDream
              wrapperClass={`primary`}
              countNumber={66}
              icon={`/assets/images/icons/icon-11.svg`}
              des={`People who are committed to their management tasks`}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
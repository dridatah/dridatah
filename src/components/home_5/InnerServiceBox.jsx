"use client"
import Link from 'next/link'
import React from 'react'
import SingleServiceLayoutThree from '../single/service/SingleServiceLayoutThree'

export default function InnerServiceBox() {
  return (
    <div className="hm5-service-section">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="section-title text-center">
            <span className="cr-subtitle position-relative fw-semibold primary-text-color">What's Going On</span>
            <h3 className="mb-0 text-white mt-4">My Unique Services</h3>
          </div>
        </div>
      </div>
      <div className="row g-4 mt-60">
        <SingleServiceLayoutThree
          title={`Web Design & Logo`}
          subtitle={`Apps Development`}
          des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration`}
          icon={`/assets/images/home-5/icon-1.png`}
          link={`/service/details`}
        />
        <SingleServiceLayoutThree
          title={`Android App Design`}
          subtitle={`Apps Development`}
          des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration`}
          icon={`/assets/images/home-5/icon-2.png`}
          link={`/service/details`}
        />
        <SingleServiceLayoutThree
          title={`UI/UX Design Task`}
          subtitle={`Apps Development`}
          des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration`}
          icon={`/assets/images/home-5/icon-3.png`}
          link={`/service/details`}
        />
        <SingleServiceLayoutThree
          title={`Growth Insights`}
          subtitle={`Apps Development`}
          des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration`}
          icon={`/assets/images/home-5/icon-4.png`}
          link={`/service/details`}
        />
        <SingleServiceLayoutThree
          title={`Digital Marketing`}
          subtitle={`Apps Development`}
          des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration`}
          icon={`/assets/images/home-5/icon-5.png`}
          link={`/service/details`}
        />
        <SingleServiceLayoutThree
          title={`Unity & Unreal Engine`}
          subtitle={`Apps Development`}
          des={`There are many variations of passages of lorem Ipsum available but to the majority have suffered but the into majority have suffered alteration`}
          icon={`/assets/images/home-5/icon-6.png`}
          link={`/service/details`}
        />

      </div>
    </div>
  )
}
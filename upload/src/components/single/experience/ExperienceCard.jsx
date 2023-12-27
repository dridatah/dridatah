"use client"
import Image from 'next/image'
import React from 'react'

export default function ExperienceCard({ designation, companyName, companyLogo, duration }) {
  return (
    <div className="col-xl-6">
      <div className="hm5-exp-single d-flex align-items-center justify-content-between flex-wrap gap-4">
        <div className="d-flex align-items-center gap-3 flex-wrap">
          <span className="icon bg-facebook flex-shrink-0 d-inline-flex align-items-center justify-content-center rounded-circle">
            <Image src={companyLogo} alt="not found" width={50} height={50} className="img-fluid" />
          </span>
          <div>
            <h6 className="fs-20 mb-0 text-white">{designation}</h6>
            <span className="text-white">{companyName}</span>
          </div>
        </div>
        <span className="date text-white">{duration}</span>
      </div>
    </div>
  )
}
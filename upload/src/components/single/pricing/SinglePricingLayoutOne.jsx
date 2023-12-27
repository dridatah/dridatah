"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SinglePricingLayoutOne({
  title, tagline, link, price, plan_type, data_wow_delay = "0.3s", features = []
}) {
  return (
    <div className="col-xl-4 col-md-6">
      <div
        suppressHydrationWarning
        className="pricing-box text-center wow fadeInUp"
        data-wow-delay={data_wow_delay}
      >
        <h3 className="fw-medium">{title}</h3>
        <span className="fw-medium d-block mb-32 subtitle"
        >{tagline}</span>
        <span className="package-icon rounded-circle bg-white">
          <Image
            src="/assets/images/icons/lamp.png"
            alt="lamp"
            width={75}
            height={70}
            className="img-fluid"
          />
        </span>
        <div className="pricing-box-content">
          <h6 className="h2 pricing-title">
            {price} <span className="fs-md fw-medium">/{plan_type}</span>
          </h6>
          <div className="spacer mt-4 mb-32"></div>
          <ul className="pricing-features text-start">
            {features && features.map((fe, index) => {
              return <li key={`${fe}-${index}`}>
                <span className="me-2"><i className="far fa-check-circle"></i></span>{fe}
              </li>
            })}


          </ul>
          <Link href={link} className="template-btn secondary-btn mt-40 w-100"
          >Get Started</Link>
        </div>
      </div>
    </div>
  )
}
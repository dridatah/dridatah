"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SingleServiceLayoutThree({ title, subtitle, des, icon, link }) {
  return (
    <div className="col-xxl-4 col-lg-6">
      <div className="hm5-service-card service-card">
        <span className="fs-sm fw-bold text-white text-uppercase d-block mb-5">{subtitle}</span>
        <span className="icon-wrapper">
          <Image src={icon} alt="icon" className="img-fluid" width={80} height={80} />
        </span>
        <div className="mt-40">
          <h6 className="mb-4 text-white">{title}</h6>
          <p className="mb-32 fw-medium">{des}</p>
          <Link href={link} className="explore-btn">
            Get Started
            <span className="ms-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 1.21875L13.75 6.46875C13.9062 6.625 14 6.8125 14 7.03125C14 7.21875 13.9062 7.40625 13.75 7.5625L8.25 12.8125C7.96875 13.0938 7.46875 13.0938 7.1875 12.7812C6.90625 12.5 6.90625 12 7.21875 11.7188L11.375 7.78125H0.75C0.3125 7.78125 0 7.4375 0 7.03125C0 6.59375 0.3125 6.28125 0.75 6.28125H11.375L7.21875 2.3125C6.90625 2.03125 6.90625 1.53125 7.1875 1.25C7.46875 0.9375 7.9375 0.9375 8.25 1.21875Z" fill="#1F1F1F" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
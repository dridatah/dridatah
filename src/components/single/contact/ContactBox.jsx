"use client"
import Image from 'next/image'
import React from 'react'

export default function ContactBox({ thumbnail, icon, title, subtitle }) {
  return (
    <div className="cp-contact-card">
      <div className="feature-image rounded-top-4">
        <Image src={thumbnail} alt="not found" className="img-fluid" width={611} height={376} />
      </div>
      <div className="ct-contact-card-content d-flex align-items-center gap-4">
        <div className="icon">
          <Image src={icon} alt="not found" className="img-fluid" width={50} height={50} />
        </div>
        <div>
          <span className="fs-sm fw-bold primary-text-color text-uppercase">{title}
          </span>
          <h6 className="mb-0 mt-1">{subtitle}</h6>
        </div>
      </div>
    </div>
  )
}
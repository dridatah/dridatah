"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SingleServiceLayoutTwo({
  title, des, thumbnail, link, data_wow_delay = "0.1s"
}) {
  return (
    <div className="hm2-service-box">
      <span className="icon-wrapper">
        <Image src={thumbnail} alt="icon" className="img-fluid"
          width={70}
          height={65}
        />
      </span>
      <h6 className="mt-32">{title}</h6>
      <p className="mb-32 mt-4 fw-medium">{des}</p>
      <Link href={link} className="explore-btn">
        Get Started
        <span className="ms-2">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </Link>
    </div>
  )
}
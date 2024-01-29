"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SinglePortfolioLayoutOne({
  title, des, link, thumbnail, col = 'col-lg-6', data_wow_delay = "0.1s"
}) {
  return (
    <div className={col}>
      <div suppressHydrationWarning className="pf-box position-relative wow fadeInUp"
        data-wow-delay={data_wow_delay}
      >
        <Image
          src={thumbnail}
          alt="not found"
          width={938}
          height={750}
          className="img-fluid"
        />
        <Link href={link} className="explore-btn">
          <Image
            className='animate-icon'
            src="/assets/images/icons/arrowLeftTopCorner.png"
            width={16}
            height={16}
            alt="icon" />
        </Link>
        <div className="pf-content">
          <h3 className="mb-20 text-white">{title}</h3>
          <p className="mb-0 fw-medium text-white">
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}
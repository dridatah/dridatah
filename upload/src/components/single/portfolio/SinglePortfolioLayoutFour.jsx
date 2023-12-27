"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SinglePortfolioLayoutFour({
  wrapperClass, thumbnail, title, subtitle, link
}) {
  return (
    <div className={wrapperClass}>
      <div className="pp-project-card rounded-3 overflow-hidden position-relative z-1">
        <Image src={thumbnail} alt="project" className="img-fluid" width={609} height={676} />
        <Link href={link} className="explore-btn"><i className="fas fa-eye"></i></Link>
        <div className="project-content">
          <h6 className="mb-2 text-white">{title}</h6>
          <span className="fw-semibold text-uppercase text-white fs-sm">{subtitle}</span>
        </div>
      </div>
    </div>
  )
}
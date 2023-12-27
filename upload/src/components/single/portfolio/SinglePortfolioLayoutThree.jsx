"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SinglePortfolioLayoutThree({ subtitle, title, link, thumbnail, wrapperClass }) {
  return (
    <div className={`hm4-project-single ${wrapperClass}`}>
      <div className="feature-image position-relative">
        <Image src={thumbnail} alt="not found" width={350} height={265} className="img-fluid" />
        <Link href={link} className="explore-btn"><i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="mt-32">
        <span>{subtitle}</span>
        <Link href={link}><h6 className="mb-0">{title}</h6></Link>
      </div>
    </div>
  )
}
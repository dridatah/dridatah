"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SinglePortfolioLayoutTwo({
  smtitle, title, link, thumbnail, data_wow_delay = "0.1s"
}) {
  return (
    <div className="col-md-6">
      <div suppressHydrationWarning className="hm3-project-single bg-white wow fadeInUp" data-wow-delay={data_wow_delay}>
        <div className="feature-image">
          <Image src={thumbnail} alt="not found" width={796} height={601} className="img-fluid" />
        </div>
        <div className="pr-content mt-40">
          <span className="text-uppercase fw-medium fs-sm">{smtitle}</span>
          <Link href={link}><h6 className="mb-0 mt-2">{title}</h6></Link>
        </div>
      </div>
    </div>
  )
}
"use client"
import { renderStars } from '@/helper'
import Image from 'next/image'
import React from 'react'

export default function SingleTestimonialLayountThree({
  title, des, author, designation, avatar, ratings = 5
}) {
  return (
    <div className="hm3-feedback-single">
      <Image src={avatar} alt="client" className="rounded-circle" width={70} height={70} />
      <h6 className="mt-32 mb-4">{title}</h6>
      <p className="mb-0">{des}</p>
      <span className="spacer"></span>
      <div className="d-flex align-items-center flex-wrap flex-xl-nowrap gap-3">
        <ul className="d-flex star-ratings">
          {renderStars(ratings)}
        </ul>
        <div className="info">
          <h6 className="mb-0 fs-18">{author}</h6>
          <p className="mb-0">{designation}</p>
        </div>
      </div>
    </div>
  )
}
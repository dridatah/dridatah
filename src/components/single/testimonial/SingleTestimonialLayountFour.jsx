"use client"
import { renderStars } from '@/helper'
import Image from 'next/image'
import React from 'react'

export default function SingleTestimonialLayountFour({
  des, author, designation, avatar, ratings = 5
}) {
  return (
    <div className="hm4-feedback-single">
      <p className="mb-0">{des}</p>
      <span className="spacer"></span>
      <div className="d-flex align-items-center flex-wrap flex-xxl-nowrap gap-3 justify-content-between">
        <div className="info d-flex align-items-center gap-4">
          <div className="thumb">
            <Image src={avatar} alt="client" width={70} height={70} className="rounded-circle img-fluid" />
          </div>
          <div>
            <h6 className="mb-0 fs-18">{author}</h6>
            <p className="mb-0">{designation}</p>
          </div>
        </div>
        <ul className="d-flex star-ratings">
          {renderStars(ratings)}
        </ul>
      </div>
    </div>
  )
}



"use client"
import Image from 'next/image'
import React from 'react'

export default function SingleTestimonialLayountOne({
  title, author, designation, avatar
}) {
  return (
    <div className="slide-single">
      <div className="feedback-single bg-white">
        <Image
          src="assets/images/icons/quote-1.svg"
          alt="quote"
          width={66}
          height={120}
          className="img-fluid  align-self-start"
        />
        <div className="feedback-content">
          <h3 className="fw-medium mb-0 clients-comment">{title}</h3>
          <div className="spacer mt-50 mb-40"></div>
          <div className="d-flex align-items-center gap-3">
            <Image
              src={avatar}
              alt="client"
              width={70}
              height={70}
              className="img-fluid rounded-circle flex-shrink-0"
            />
            <div>
              <h6 className="fw-semibold mb-1">{author}</h6>
              <span className="fw-medium">{designation}</span>
            </div>
          </div>
        </div>
        <Image
          src="assets/images/icons/quote-2.svg"
          alt="quote"
          width={66}
          height={120}
          className="img-fluid align-self-end"
        />
      </div>
    </div>
  )
}
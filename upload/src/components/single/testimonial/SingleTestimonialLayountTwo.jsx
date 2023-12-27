"use client"
import Image from 'next/image'
import React from 'react'

export default function SingleTestimonialLayountTwo({
  title, author, designation, avatar
}) {
  return (
    <div className="cr2-feedback-single">
      <p className="mb-0 fw-medium">{title}</p>
      <span className="spacer"></span>
      <div className="d-flex align-items-center justify-content-between">
        <div className="clients_info d-flex align-items-center gap-4 flex-wrap">
          <Image src={avatar} alt="client" className="img-fluid rounded-circle" width={70} height={70} />
          <div>
            <h5 className="mb-0 fw-semibold">{author}</h5>
            <span className="fw-medium fs-sm">{designation}</span>
          </div>
        </div>
        <Image src="/assets/images/icons/quote.svg" alt="quote" className="img-fluid" width={60} height={60} />
      </div>
    </div>
  )
}
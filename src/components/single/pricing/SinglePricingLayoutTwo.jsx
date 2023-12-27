"use client"
import Link from 'next/link'
import React from 'react'

export default function SinglePricingLayoutTwo({ wrapper_class, badge_title, title, price, link, features = [] }) {
  return (
    <div className={`hm4-pricing-box position-relative d-flex align-items-center justify-content-between gap-4 ${wrapper_class}`}>
      <span className="saving-badge">{badge_title}</span>
      <div className="pricing-features">
        <h6>{title}</h6>
        <ul>
          {features && features.map((fe, i) => {
            return <li key={`${fe}-${i}`}><i className="fa-regular fa-circle-check me-2"></i>{fe}</li>
          })}
        </ul>
      </div>
      <div className="price-amount text-center">
        <h3 className="mb-4">{price}</h3>
        <Link href={link} className="template-btn primary-btn rounded-pill">Hire Me Now</Link>
      </div>
    </div>
  )
}
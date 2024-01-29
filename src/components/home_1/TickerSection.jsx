"use client"
import React from 'react'

export default function TickerSection() {
  return (
    <div
      className="ticker-section position-relative overflow-hidden z-1"
      style={{ backgroundImage: `url(/assets/images/shapes/ticker-bg.png)` }}
    >
      <div className="ur-ticker-box overflow-hidden">
        <div className="ur-ticker-wrapper primary-bg-color">
          <div className="ur-ticker">
            <span className="text-white text-uppercase"
            ><i className="fas fa-star me-2"></i>WHAT WE DO</span>
            <span className="text-white text-uppercase"
            ><i className="fas fa-star me-2"></i>WE LOVE TO WORK WITH</span>
            <span className="text-white text-uppercase"
            ><i className="fas fa-star me-2"></i>WE LOVE WHAT WE DO</span>
            <span className="text-white text-uppercase"
            ><i className="fas fa-star me-2"></i>WE DO AGENCY</span>
            <span className="text-white text-uppercase"
            ><i className="fas fa-star me-2"></i>WE DO AGENCY SOLUTION</span>
            <span className="text-white text-uppercase"
            ><i className="fas fa-star me-2"></i>WHAT WE LOVE TO WORK WITH</span>
          </div>
        </div>
      </div>
    </div>
  )
}
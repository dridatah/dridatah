"use client"
import Link from 'next/link'
import React from 'react'

export default function ServiceSidebar() {
  return (
    <div className="service-sidebar">
      <div className="sidebar-widget category-widget">
        <h6 className="widget-title mb-32">Categories</h6>
        <ul className="category-list">
          <li><Link href="/service/details">Web Development <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
          <li><Link href="/service/details">Digital Marketing <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
          <li><Link href="/service/details">Business Solution <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
          <li><Link href="/service/details">Content Strategy <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
          <li><Link href="/service/details">Software Design <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
        </ul>
      </div>
      <div className="sidebar-widget contact-widget mt-32 primary-bg-color">
        <h6 className="mb-2 text-white">Need Any Help</h6>
        <p className="mb-32 text-white">Need Any Help, Call Us 24/7 For Support</p>
        <div className="sidebar-icon-box">
          <span className="icon d-flex align-items-center justify-content-center rounded-circle">
            <i className="fa-solid fa-phone"></i>
          </span>
          <div>
            <span className="fs-sm fw-semibold subtitle">Call Us</span>
            <a href="tel:2869852156"><h6 className="mb-0 text-white fs-18">+286 985 2156</h6></a>
          </div>
        </div>
        <div className="sidebar-icon-box mt-20">
          <span className="icon d-flex align-items-center justify-content-center rounded-circle">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <div>
            <span className="fs-sm fw-semibold subtitle">Mail Us</span>
            <a href="mailto:info@example.com"><h6 className="mb-0 text-white fs-18">info@example.com</h6></a>
          </div>
        </div>
        <div className="sidebar-icon-box mt-20">
          <span className="icon d-flex align-items-center justify-content-center rounded-circle">
            <i className="fa-solid fa-location-dot"></i>
          </span>
          <div>
            <span className="fs-sm fw-semibold subtitle">Office Address</span>
            <a href="tel:2869852156"><h6 className="mb-0 text-white fs-18">125 Berlin, Germany</h6></a>
          </div>
        </div>
      </div>
    </div>
  )
}
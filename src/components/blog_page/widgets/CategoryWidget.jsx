"use client"
import Link from 'next/link'
import React from 'react'

export default function CategoryWidget() {
  return (
    <div className="sidebar-widget category-widget mt-32">
      <h6 className="widget-title mb-32">Categories</h6>
      <ul className="category-list">
        <li><Link href="blog/details">Web Development <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
        <li><Link href="blog/details">Digital Marketing <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
        <li><Link href="blog/details">Business Solution <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
        <li><Link href="blog/details">Content Strategy <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
        <li><Link href="blog/details">Software Design <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link></li>
      </ul>
    </div>
  )
}
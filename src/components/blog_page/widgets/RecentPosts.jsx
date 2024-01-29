"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function RecentPosts() {
  return (
    <div className="sidebar-widget recent-post-widget mt-32">
      <h6 className="widget-title mb-32">Recent Posts</h6>
      <ul className="sidebar-post-list">


        <li className="d-flex align-items-center gap-3">
          <div className="feature-image rounded-3 overflow-hidden">
            <Link href="blog/details"><Image src="/assets/images/blog/sidebar-post-1.jpg" alt="not found" className="img-fluid" width={255} height={255} /></Link>
          </div>
          <div>
            <span className="author fs-sm fw-medium"><i className="fa-regular fa-user me-2"></i>by David Smith</span>
            <Link href="blog/details"><h6 className="mb-0 mt-1 fs-18">How to Start a Creative Agency & Get Ahead</h6></Link>
          </div>
        </li>
        <li className="d-flex align-items-center gap-3">
          <div className="feature-image rounded-3 overflow-hidden">
            <Link href="blog/details"><Image src="/assets/images/blog/sidebar-post-2.jpg" alt="not found" className="img-fluid" width={255} height={255} /></Link>
          </div>
          <div>
            <span className="author fs-sm fw-medium"><i className="fa-regular fa-user me-2"></i>by David Smith</span>
            <Link href="blog/details"><h6 className="mb-0 mt-1 fs-18">How to Start a Creative Agency & Get Ahead</h6></Link>
          </div>
        </li>
        <li className="d-flex align-items-center gap-3">
          <div className="feature-image rounded-3 overflow-hidden">
            <Link href="blog/details"><Image src="/assets/images/blog/sidebar-post-3.jpg" alt="not found" className="img-fluid" width={255} height={255} /></Link>
          </div>
          <div>
            <span className="author fs-sm fw-medium"><i className="fa-regular fa-user me-2"></i>by David Smith</span>
            <Link href="blog/details"><h6 className="mb-0 mt-1 fs-18">How to Start a Creative Agency & Get Ahead</h6></Link>
          </div>
        </li>
      </ul>
    </div>
  )
}
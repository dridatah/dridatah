"use client"
import Link from 'next/link'
import React from 'react'

export default function ProjectsNextPrev() {
  return (
    <div className="related-projects pb-100">
      <div className="container">
        <div className="rl-projects d-flex align-items-center justify-content-between gap-4 flex-wrap flex-sm-nowrap">
          <div className="rl-project-single d-flex align-items-center">
            <Link href="/project/details" className="explore-btn"><i className="fas fa-arrow-left"></i></Link>
            <div>
              <span className="fs-sm fw-medium">Previous Post</span>
              <Link href="/project/details"><h6 className="mb-0 mt-1 fs-18">Website Development</h6></Link>
            </div>
          </div>
          <div className="rl-project-single d-flex align-items-center justify-content-end">
            <div className="text-end">
              <span className="fs-sm fw-medium">Next Post</span>
              <Link href="/project/details"><h6 className="mb-0 mt-1 fs-18">Website Development</h6></Link>
            </div>
            <Link href="/project/details" className="explore-btn"><i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
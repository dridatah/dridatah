"use client"
import Image from 'next/image'
import React from 'react'

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-widget search-widget">
        <form className="d-flex align-items-center gap-0">
          <input type="text" placeholder="Enter Keywords" />
          <button type="submit" className="submit-btn template-btn primary-btn"><i className="fas fa-magnifying-glass"></i></button>
        </form>
      </div>
      <div className="add-banner rounded-4 mt-32 overflow-hidden">
        <Image src="/assets/images/blog/ad.jpg" alt="ad" className="img-fluid" width={581} height={525} />
      </div>
    </>
  )
}
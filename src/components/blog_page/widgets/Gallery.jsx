"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Gallery() {
  return (
    <div className="sidebar-widget gallery-widget mt-32">
      <h6 className="widget-title mb-32">Gallery</h6>
      <ul className="gallery-thumbnails">
        <li>
          <Link href="/"><Image src="/assets/images/gallery/1.jpg" alt="thumbnail" className="img-fluid" width={285} height={285} /></Link>
        </li>
        <li>
          <Link href="/"><Image src="/assets/images/gallery/2.jpg" alt="thumbnail" className="img-fluid" width={285} height={285} /></Link>
        </li>
        <li>
          <Link href="/"><Image src="/assets/images/gallery/3.jpg" alt="thumbnail" className="img-fluid" width={285} height={285} /></Link>
        </li>
        <li>
          <Link href="/"><Image src="/assets/images/gallery/4.jpg" alt="thumbnail" className="img-fluid" width={285} height={285} /></Link>
        </li>
        <li>
          <Link href="/"><Image src="/assets/images/gallery/5.jpg" alt="thumbnail" className="img-fluid" width={285} height={285} /></Link>
        </li>
        <li>
          <Link href="/"><Image src="/assets/images/gallery/6.jpg" alt="thumbnail" className="img-fluid" width={285} height={285} /></Link>
        </li>
      </ul>
    </div>
  )
}
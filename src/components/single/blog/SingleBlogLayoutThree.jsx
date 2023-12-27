"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SingleBlogLayoutThree({ title, thumbnail, link, date, read, tags = [] }) {
  return (
    <div className="col-xxl-4 col-lg-6">
      <article className="hm2-blog-card hm5-blog-card">
        <div className="feature-image overflow-hidden position-relative">
          <Image src={thumbnail} alt="blog" className="img-fluid" width={768} height={600} />
        </div>
        <div className="blog-content mt-32">
          <div className="blog-meta d-flex align-items-center flex-wrap gap-4">
            <span className="fs-sm fw-medium">{date}</span>
            <span className="fs-sm fw-medium">{read}</span>
          </div>
          <Link href={link}><h6 className="my-4">{title}</h6></Link>
          <div className="categories d-flex align-items-center gap-3 flex-wrap">
            {tags && tags.map((tag, i) => <Link key={`${tag}-${i}`} href="/">{tag}</Link>)}


          </div>
        </div>
      </article>
    </div>
  )
}
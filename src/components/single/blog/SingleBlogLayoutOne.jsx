"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function SingleBlogLayoutOne({
  title, des, thumbnail, tag, date, link
}) {


  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };
  return (
    <div className="col-lg-6">
      <article
        suppressHydrationWarning
        className={`article-card  position-relative ${showDescription && 'crn-article-card-hover-active'} wow fadeInUp`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="overlay-bg position-absolute"></span>
        <div className="feature-image overflow-hidden">
          <Link href={link}
          ><Image
              src={thumbnail}
              alt="not found"
              width={968}
              height={1058}
              className="img-fluid"
            /></Link>
        </div>
        <div className="card-content-wrapper bg-white">
          <div
            className="blog-meta d-flex align-items-center gap-4 mb-4 flex-wrap"
          >
            <span className="date fw-medium"
            ><i
              className="fa-regular fa-calendar-days me-2 primary-text-color"
            ></i>{date}</span>
            <span className="tags fw-medium"
            ><i className="fa-solid fa-tags me-2 primary-text-color"></i>{tag}</span>
          </div>
          <Link href={link}
          ><h3 className="mb-4 title fw-semibold">
              {title}
            </h3></Link>
          <p className={`${showDescription && 'mb-32'} description`}>
            {des}
          </p>
          <Link href={link} className="explore-btn"
          >Learn More<span className="ms-2"
          ><i className="fa-solid fa-arrow-right"></i></span></Link>
        </div>
      </article>
    </div>
  )
}
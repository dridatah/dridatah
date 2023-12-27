"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from "react-slick";

export default function SingleBlogLayoutFour({
  title, des, link, author_name, date, thumbnail, gallery = [], tags = [],
}) {
  // Prev arrow
  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick} className="prev-arrow"><i className="fa-solid fa-arrow-left"></i></button>
  );

  // Next arrow
  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick} className="next-arrow"><i className="fa-solid fa-arrow-right"></i></button>
  );

  // Slider config 
  const settings = {
    slidesToShow: 1,
    autoplay: true,
    speed: 700,
    className: "feature-image bp-feature-image-slider overflow-hidden slider-spacing",
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  return (
    <article className="bp-blog-card rounded-4 overflow-hidden mt-40">
      {/* only thumbnail */}
      {thumbnail && gallery.length === 0 &&
        <div className="feature-image overflow-hidden">
          <Link href="/blog">
            <Image src={thumbnail} alt="not found" className="img-fluid" width={1265} height={750} />
          </Link>
        </div>
      }

      {/* if  has gallery */}
      {
        gallery && gallery.length > 0 &&
        <Slider {...settings}>
          {gallery && gallery.map((thumb, index) => {
            return (

              <Link href="/blog" key={`${thumb}-${index}`}>
                <Image src={thumb} alt="not found" className="img-fluid" width={1265} height={750} />
              </Link>

            )
          })}
        </Slider>
      }


      <div className="blog-content">
        <div className="blog-meta d-flex align-items-center flex-wrap">
          <span><i className="fas fa-user me-2"></i>by {author_name}</span>
          <span><i className="fas fa-calendar-days me-2"></i>{date}</span>
          {
            tags && tags.map((tag, index) => <span key={`${tag}-${index}`}><i className="fas fa-tags me-2"></i>{tag}</span>)
          }

        </div>
        <Link href={link}><h4 className="mt-4 mb-4">{title}</h4></Link>
        <p className="mb-32">{des}</p>
        <Link href={link} className="template-btn primary-btn">Read Details</Link>
      </div>
    </article>
  )
}
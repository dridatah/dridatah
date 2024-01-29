"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';
export default function SingleBlogLayoutTwo({
  blog
}) {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Fragment >
      <div className="col-xl-4 col-sm-6">
        <article className="hm2-blog-card">
          <div className="feature-image rounded-3 overflow-hidden position-relative">
            <Image src={`${blog?.thumbnail}`} alt="blog" className="img-fluid" width={610} height={480} />
            <a
              onClick={openModal} className="video-btn video-popup-btn rounded-circle d-inline-flex align-items-center justify-content-center">
              <i className="fas fa-play"></i>
            </a>
          </div>
          <div className="blog-content mt-32">
            <div className="blog-meta d-flex align-items-center flex-wrap gap-4">
              <span className="fs-sm fw-medium">{blog?.date}</span>
              <span className="fs-sm fw-medium">{blog?.read}</span>
            </div>
            <Link href={`${blog?.link}`}><h6 className="my-4">{blog?.title}</h6></Link>
            <div className="categories d-flex align-items-center gap-3 flex-wrap">
              {blog?.tags.map((tag, index) => {
                return <Link key={`${tag}-${index + 1}`} href="/">{tag}</Link>
              })}

            </div>
          </div>
        </article>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={`${blog?.video_url}`}
        onClose={closeModal}
      />
    </Fragment>
  )
}
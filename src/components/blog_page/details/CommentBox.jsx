"use client"
import Image from 'next/image'
import React from 'react'

export default function CommentBox() {
  return (
    <div className="blog-comments mt-40">
      <h4 className="mb-2 fs-30">04 Comments</h4>
      <ul className="blog-comment-list">
        <li className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
          <div className="client-thumb">
            <Image src="/assets/images/author/client-1.jpg" alt="not found" className="img-fluid" width={166} height={165} />
          </div>
          <div className="position-relative">
            <span className="fw-light fs-sm text-color">Sep 25, 2022</span>
            <h6 className="mb-3 mt-1">Amalia Genner</h6>
            <p className="fw-light text-color mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit.</p>
            <button type="button" className="reply-btn">Reply</button>
          </div>
        </li>
        <li className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap ms-5">
          <div className="client-thumb">
            <Image src="/assets/images/author/client-2.jpg" alt="not found" className="img-fluid" width={166} height={165} />
          </div>
          <div className="position-relative">
            <span className="fw-light fs-sm text-color">Sep 25, 2022</span>
            <h6 className="mb-3 mt-1">Gennifer Genny</h6>
            <p className="fw-light text-color mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit.</p>
            <button type="button" className="reply-btn">Reply</button>
          </div>
        </li>
        <li className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
          <div className="client-thumb">
            <Image src="/assets/images/author/client-1.jpg" alt="not found" className="img-fluid" width={166} height={165} />
          </div>
          <div className="position-relative">
            <span className="fw-light fs-sm text-color">Sep 25, 2022</span>
            <h6 className="mb-3 mt-1">Jacyka jacy</h6>
            <p className="fw-light text-color mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit.</p>
            <button type="button" className="reply-btn">Reply</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
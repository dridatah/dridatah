"use client"
import React from 'react'
import Sidebar from '../Sidebar'
import Image from 'next/image'
import AuthorBox from './AuthorBox'
import BlogContents from './BlogContents'
import CommentBox from './CommentBox'
import ReplyBox from './ReplyBox'

export default function BlogDetailsWrapper() {
  return (
    <section className="bp-blog-section ptb-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="blog-details-wrapper">
              <div className="blog-details-content rounded-3">
                <BlogContents />
                <AuthorBox />
                <CommentBox />
                <ReplyBox />
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </div>
    </section>
  )
}
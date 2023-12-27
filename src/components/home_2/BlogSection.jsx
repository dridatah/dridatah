"use client"
import React from 'react';
import { latest_blogs } from './home_2_data.js'
import SingleBlogLayoutTwo from '../single/blog/SingleBlogLayoutTwo.jsx';
export default function BlogSection() {

  return (
    <section className="blog-section ptb-100 bg-white overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <span className="cr-subtitle position-relative primary-text-color fw-semibold">What's Going On</span>
              <h2 className="mt-4">Latest News <span className="primary-bg-light primary-text-color px-2">Updates</span></h2>
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center g-4">
          {
            latest_blogs && latest_blogs.map((blog) => <SingleBlogLayoutTwo blog={blog} key={blog?.id} />)
          }

        </div>
      </div>
    </section>
  )
}

"use client"
import React from 'react'
import InnerBlogList from './InnerBlogList'
import Sidebar from './Sidebar'

export default function BlogWrapper() {
  return (
    <section className="bp-blog-section ptb-100">
      <div className="container">
        <div className="row g-4">
          <InnerBlogList />
          <Sidebar />
        </div>
      </div>
    </section>
  )
}
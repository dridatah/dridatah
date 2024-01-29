"use client"
import React from 'react'
import SingleBlogLayoutOne from '../single/blog/SingleBlogLayoutOne'
import Link from 'next/link'

export default function BlogSection() {
  return (
    <section className="blog-section ptb-100">
      <div className="container-large">
        <div className="row justify-content-between">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title">
              <span
                suppressHydrationWarning
                className="cr-subtitle position-relative fw-semibold primary-text-color d-inline-block wow fadeInUp"
              >News & Updates</span>
              <h2 suppressHydrationWarning className="mb-0 mt-4 wow fadeInUp" data-wow-delay="0.2s">
                Recent Blog<span
                  className="px-1 ms-2 primary-bg-light primary-text-color"
                >Updates</span>
              </h2>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="text-end d-none d-lg-block">
              <Link href="/blog" className="template-btn secondary-btn"
              >View All Posts</Link>
            </div>
          </div>
        </div>
        <div className="row mt-5 g-4">
          <SingleBlogLayoutOne
            title={`The aim of creative agency mainly deliver innovative
                    solutions`}
            des={` Vel morbi proin class nisl fringilla nascetur primis, odio
                  sociis eget sapien est venenatis mattis tristique, condimentum
                  lectus cursus ultricies aptent bibendum. Per litora libero`}
            thumbnail={`/assets/images/blog/blog-1.jpg`}
            tag={`Agency Solution`}
            date={`March 15, 2023`}
            link={`/blog/details`}
          />
          <SingleBlogLayoutOne
            title={`The aim of creative agency mainly deliver innovative
                    solutions`}
            des={` Vel morbi proin class nisl fringilla nascetur primis, odio
                  sociis eget sapien est venenatis mattis tristique, condimentum
                  lectus cursus ultricies aptent bibendum. Per litora libero`}
            thumbnail={`/assets/images/blog/blog-2.jpg`}
            tag={`Agency Solution`}
            date={`March 15, 2023`}
            link={`/blog/details`}
          />
        </div>
        <div className="text-center mt-5 d-lg-none">
          <Link
            suppressHydrationWarning
            href="/blog"
            className="template-btn secondary-btn wow fadeInUp"
          >View All Posts</Link>
        </div>
      </div>
    </section>
  )
}
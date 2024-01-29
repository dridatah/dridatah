"use client"
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';
import SingleBlogLayoutThree from '../single/blog/SingleBlogLayoutThree';

export default function BlogSection() {
  // get active section from global state
  const activeSection = useSelector((state) => state.global.home_five_active_section);
  return (
    <section className={`main-content-wrapper hm5-box blog_box ${activeSection === 'blog' && 'active'}`} id="blog">

      <div className="hm5-blog-section">
        <div className="container-1660">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="text-center">
                <span className="cr-subtitle position-relative primary-text-color fw-semibold">Our Blog Insights</span>
                <h3 className="mb-0 mt-4 text-white">Latest Blog Posts</h3>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-60 justify-content-center">
            <SingleBlogLayoutThree
              title={`The Highly Creative UI/UX Design from a Silicon Valley.`}
              thumbnail={`/assets/images/home-5/blog-1.jpg`}
              link={`/blog/details`}
              date={`25 June, 2023`}
              read={`6 min read`}
              tags={['Digital', 'Software']}
            />
            <SingleBlogLayoutThree
              title={`Exploring Innovative Trends and Ideas for Design Future.`}
              thumbnail={`/assets/images/home-5/blog-2.jpg`}
              link={`/blog/details`}
              date={`25 June, 2023`}
              read={`6 min read`}
              tags={['Digital', 'Software']}
            />
            <SingleBlogLayoutThree
              title={`How to Create Meaningful and Impactful Designs.`}
              thumbnail={`/assets/images/home-5/blog-3.jpg`}
              link={`/blog/details`}
              date={`25 June, 2023`}
              read={`6 min read`}
              tags={['Digital', 'Software']}
            />
            <SingleBlogLayoutThree
              title={`Strategies and Techniques for Mobile Design Life.`}
              thumbnail={`/assets/images/home-5/blog-4.jpg`}
              link={`/blog/details`}
              date={`25 June, 2023`}
              read={`6 min read`}
              tags={['Digital', 'Software']}
            />
            <SingleBlogLayoutThree
              title={`The Best Practices for Creating Effective Websites.`}
              thumbnail={`/assets/images/home-5/blog-5.jpg`}
              link={`/blog/details`}
              date={`25 June, 2023`}
              read={`6 min read`}
              tags={['Digital', 'Software']}
            />
            <SingleBlogLayoutThree
              title={`Creating Strong Brand Identity Through Design Module.`}
              thumbnail={`/assets/images/home-5/blog-6.jpg`}
              link={`/blog/details`}
              date={`25 June, 2023`}
              read={`6 min read`}
              tags={['Digital', 'Software']}
            />
          </div>
        </div>
      </div>

    </section>
  )
}
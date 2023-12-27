"use client"
import React from 'react'
import SingleBlogLayoutFour from '../single/blog/SingleBlogLayoutFour'
import Link from 'next/link'

export default function InnerBlogList() {
  return (
    <div className="col-xl-8">
      <SingleBlogLayoutFour
        title={`How to Increase Your scientific SEM?`}
        des={`Collaboratively pontificate bleeding edge is resources with inexpensive methodologies. Globally initiate multidisciplinary compatible architectures. Rapidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services for synergistic initiatives`}
        link={`/blog/details`}
        author_name={`David Smith`}
        date={`March 15, 2022`}
        thumbnail={`/assets/images/blog/blog-lg-1.jpg`}
        tags={['Development']}
        gallery={``}
      />
      <SingleBlogLayoutFour
        title={`How to Increase Your scientific SEM?`}
        des={`Collaboratively pontificate bleeding edge is resources with inexpensive methodologies. Globally initiate multidisciplinary compatible architectures. Rapidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services for synergistic initiatives`}
        link={`/blog/details`}
        author_name={`David Smith`}
        date={`March 15, 2022`}
        thumbnail={`/assets/images/blog/blog-lg-2.jpg`}
        tags={['Development']}
        gallery={``}
      />
      <SingleBlogLayoutFour
        title={`How to Increase Your scientific SEM?`}
        des={`Collaboratively pontificate bleeding edge is resources with inexpensive methodologies. Globally initiate multidisciplinary compatible architectures. Rapidiously repurpose leading edge growth strategies with just in time web readiness communicate timely meta services for synergistic initiatives`}
        link={`/blog/details`}
        author_name={`David Smith`}
        date={`March 15, 2022`}
        thumbnail={`/assets/images/blog/blog-lg-2.jpg`}
        tags={['Development']}
        gallery={[
          '/assets/images/blog/blog-lg-1.jpg',
          '/assets/images/blog/blog-lg-2.jpg',
          '/assets/images/blog/blog-lg-3.jpg']}
      />

      <div className="mt-60">
        <ul className="template-pagination">
          <li><Link href="/" className="active">1</Link></li>
          <li><Link href="/">2</Link></li>
          <li><Link href="/">3</Link></li>
          <li><Link href="/"><i className="fas fa-arrow-right"></i></Link></li>
        </ul>
      </div>
    </div>
  )
}
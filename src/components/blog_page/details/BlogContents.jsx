"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BlogContents() {
  return (
    <>
      <div className="feature-image">
        <Image src="/assets/images/blog/blog-lg-2.jpg" alt="blog" className="img-fluid rounded-3" width={1265} height={750} />
      </div>
      <div className="blog-meta d-flex align-items-center flex-wrap mt-40">
        <span><i className="fa-regular fa-user me-2"></i>by David Smith</span>
        <span><i className="fa-solid fa-calendar-days me-2"></i>March 15, 2022</span>
        <span><i className="fa-solid fa-tags me-2"></i>Web Development</span>
      </div>
      <h3 className="mt-3 mb-32">How to Increase Your scientific SEM?</h3>
      <p className="cap-text-wrapper"><span className="cap-text">C</span>Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate timely meta services for synergistic initiatives functionalities.</p>
      <p>Collaboratively pontificate bleeding edge is resources with inexpensive methodologies. Globally initiate multidisciplinary compatible architectures. Rapidiously repurpose leading edge growth strategies with just in time web readiness. Objectively communicate timely meta services for synergistic initiatives. Distinctively predominate collaborative leadership skills with inexpensive functionalities.</p>
      <p>Holisticly grow unique value rather than emerging solutions. Uniquely maintain best niche markets and user friendly models. Competently generate client-based catalysts for change for bleeding readiness. Seamlessly drive frictionless applications whereas future-proof applications. Completely seize end synergy after error free results.</p>
      <h4 className="fs-30 mt-40 mb-4">Habitasse per feugiat aliquam luctus</h4>
      <p>Dynamically benchmark cross-platform supply chains through state of the art benefits. Proactively empower integrated products and value added core competencies. Distinctively reinvent optimal commerce and sticky leadership. Rapidiously reinvent functional information whereas high quality technologies provide access to diverse services whereas collaborative</p>
      <blockquote className="d-flex align-items-center bg-white rounded-3 mt-40 mb-40 flex-wrap flex-sm-nowrap">
        <span className="quote-icon">
          <svg width="53" height="39" viewBox="0 0 53 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 0.75C4.92188 0.75 0 5.78906 0 12C0 18.3281 4.92188 23.25 11.25 23.25C12.5391 23.25 13.7109 23.0156 15 22.6641V23.25C15 27.4688 11.6016 30.75 7.5 30.75C5.39062 30.75 3.75 32.5078 3.75 34.5C3.75 36.6094 5.39062 38.25 7.5 38.25C15.7031 38.25 22.5 31.5703 22.5 23.25V12C22.5 5.78906 17.4609 0.75 11.25 0.75ZM52.5 12C52.5 5.78906 47.4609 0.75 41.25 0.75C34.9219 0.75 30 5.78906 30 12C30 18.3281 34.9219 23.25 41.25 23.25C42.5391 23.25 43.7109 23.0156 45 22.6641V23.25C45 27.4688 41.6016 30.75 37.5 30.75C35.3906 30.75 33.75 32.5078 33.75 34.5C33.75 36.6094 35.3906 38.25 37.5 38.25C45.7031 38.25 52.5 31.5703 52.5 23.25V12Z" fill="white" />
          </svg>
        </span>
        <div className="quote-content">
          <p>“IT IS A LONG FACT THAT A READER WILL BE DISTRACTED BY THE READABLE CONTENT OF A PAGE WHEN LOOKING AT ITS LAYOUT.”</p>
          <h6 className="mb-0 position-relative primary-text-color fs-18">Monalisa Saisha</h6>
        </div>
      </blockquote>
      <p>Rapidiously repurpose leading edge growth strategies with just in time web readiness. Objectively communicate timely meta services for synergistic initiatives. Distinctively predominate collaborative leadership skills with inexpensive functionalities. Holisticly grow unique value rather than emerging solutions. Uniquely maintain best niche markets and user friendly models. </p>
      <div className="d-flex align-items-center gap-3 mt-40 mb-40">
        <div>
          <Image src="/assets/images/blog/blog-1.jpg" alt="not found" className="rounded-4 img-fluid" width={968} height={1058} />
        </div>
        <div>
          <Image src="/assets/images/blog/blog-2.jpg" alt="not found" className="rounded-4 img-fluid" width={968} height={1058} />
        </div>
      </div>
      <p>Distinctively reinvent optimal commerce and sticky leadership. Rapidiously reinvent functional whereas high quality technologies provide access to diverse services whereas collaborative reintermediate goal oriented data before client centered functionalities.</p>
      <h4 className="fs-30 mt-4 mb-3">Habitasse per feugiat aliquam luctus</h4>
      <p>Credibly enable maintainable potentialities after world-class applications. Professionally morph viral web services for diverse channels. Energistically enable technically sound ideas worldwide customer service. Intrinsicly strategize e-business systems through cross platform convergence.</p>
      <p>Progressively network team building architectures via impactful models. Appropriately facilitate meta services without distinctive information facilitate strategic interfaces through premier</p>
      <p className="mb-40">Progressively network team building architectures via impactful models. Appropriately facilitate meta services without distinctive information facilitate strategic interfaces through premier</p>
      <Image src="/assets/images/blog/blog-xl.jpg" alt="blog" className="img-fluid" width={1145} height={600} />
      <p className="mt-40">Globally initiate multidisciplinary compatible architectures. Rapidiously repurpose leading edge growth strategies with just in time web readiness. Objectively commuicate timely meta services for synergistic initiatives. Distinctively predominate collaborative leadership skills with inexpensive functionalit olisticly grow unique value rather than emerging solutions.</p>
      <div className="d-flex align-items-center gap-4 justify-content-between my-5 flex-wrap">
        <div className="bdp-tags-list d-flex align-items-center gap-3">
          <Link href="/">Technology</Link>
          <Link href="/">Repair</Link>
          <Link href="/">Services</Link>
        </div>
        <div className="bdp-social-follow">
          <span className="title fw-bold">Follow Us:</span>
          <Link href="/"><i className="fab fa-facebook-f"></i></Link>
          <Link href="/"><i className="fab fa-twitter"></i></Link>
          <Link href="/"><i className="fab fa-linkedin-in"></i></Link>
          <Link href="/"><i className="fab fa-google-plus"></i></Link>
        </div>
      </div>
    </>
  )
}
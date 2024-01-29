"use client"
import Link from 'next/link'
import React from 'react'
import SinglePricingLayoutTwo from '../single/pricing/SinglePricingLayoutTwo'

export default function PricingSection() {
  return (
    <section className="hm4-pricing-section ptb-100 overflow-hidden">
      <div className="container">
        <div className="row g-5">
          <div className="col-xl-5">
            <div className="section-title mb-5 mb-xl-0">
              <span className="cr-subtitle position-relative text-white fw-semibold">What's Going On</span>
              <h3 className="text-white my-4">The Best pricing plans to get your best</h3>
              <p className="mb-4 text-white">Don't find any package match with your plan! Want to setup a new tailor-made package for only you?. Contact Us</p>
              <Link href="/contact" className="template-btn white-btn">Contact Us</Link>
            </div>
          </div>
          <div className="col-xl-7 crn-pricing-box-wrapper">

            <SinglePricingLayoutTwo
              badge_title={`Save 20%`}
              title={`Personal Development`}
              price={`$669`}
              link={`/appointment`}
              features={['1 Page with Elementor', 'Design Customiation', 'Responsive Design']}
            />
            <SinglePricingLayoutTwo
              badge_title={`Save 20%`}
              title={`Personal Development`}
              price={`$669`}
              link={`/appointment`}
              features={['1 Page with Elementor', 'Design Customiation', 'Responsive Design']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
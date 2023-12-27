import React from 'react'
import SinglePricingLayoutOne from '../single/pricing/SinglePricingLayoutOne'

export default function Pricing() {

  return (
    <section className="pricing-section ptb-100 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <span suppressHydrationWarning
                className="cr-subtitle position-relative fw-semibold primary-text-color d-inline-block wow fadeInUp"
              >Pricing Plan</span>
              <h2 suppressHydrationWarning className="mt-4 mb-0 wow fadeInUp" data-wow-delay="0.2s">
                Find the Right
                <span className="primary-text-color px-2 primary-bg-light"
                >Plan</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-5 justify-content-center">
          <SinglePricingLayoutOne
            title={`Professional.`}
            tagline={`A beautiful, simple website.`}
            link={`/`}
            price={`$15.99`}
            plan_type={`monthly`}
            data_wow_delay={`0.3s`}
            features={['6 Pages Website', '4 PPC Campaigns', '12 SEO Keywords', '4 Facebook Campaigns', '3 Video Campaigns']}

          />
          <SinglePricingLayoutOne
            title={`EnterPrise.`}
            tagline={`A beautiful, simple website.`}
            link={`/`}
            price={`$21.99`}
            plan_type={`monthly`}
            data_wow_delay={`0.35s`}
            features={['6 Pages Website', '4 PPC Campaigns', '12 SEO Keywords', '4 Facebook Campaigns', '3 Video Campaigns']}
          />
          <SinglePricingLayoutOne
            title={`Business.`}
            tagline={`A beautiful, simple website.`}
            link={`/`}
            price={`$33.99`}
            plan_type={`monthly`}
            data_wow_delay={`0.4s`}
            features={['6 Pages Website', '4 PPC Campaigns', '12 SEO Keywords', '4 Facebook Campaigns', '3 Video Campaigns']}
          />
        </div>
      </div>
    </section>
  )
}

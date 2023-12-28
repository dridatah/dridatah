import React from "react";
import SinglePricingLayoutOne from "../single/pricing/SinglePricingLayoutOne";

export default function Pricing() {
  return (
    <section className="pricing-section ptb-100 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <span
                suppressHydrationWarning
                className="cr-subtitle position-relative fw-semibold primary-text-color d-inline-block wow fadeInUp"
              >
                Pricing Plan
              </span>
              <h2
                suppressHydrationWarning
                className="mt-4 mb-0 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Find the Right
                <span className="primary-text-color px-2 primary-bg-light">
                  Plan
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-5 justify-content-center">
          <SinglePricingLayoutOne
            title={`Professional`}
            tagline={`Get Discovered, Get Leads: Attract & Convert with Your New Website.`}
            link={`/`}
            price={`$15.99`}
            plan_type={`monthly`}
            data_wow_delay={`0.3s`}
            features={[
              "Static website",
              "Corporate Branding",
              "Business Email Setup",
            ]}
          />
          <SinglePricingLayoutOne
            title={`Enterprise`}
            tagline={`Boost Engagement & Conversions: Dynamic Apps, Intuitive CMS - All You Need to Grow.`}
            link={`/`}
            price={`$21.99`}
            plan_type={`monthly`}
            data_wow_delay={`0.35s`}
            features={[
              "Dynamic Web Application",
              "Content Management System",
              "Backend solutions",
            ]}
          />
          <SinglePricingLayoutOne
            title={`Business`}
            tagline={`Grow Your Audience & Revenue: Integrated Apps, Websites, & Analytics at Your Fingertips.`}
            link={`/`}
            price={`$33.99`}
            plan_type={`monthly`}
            data_wow_delay={`0.4s`}
            features={[
              "iOS App",
              "Android App",
              "Content Management System",
              "Marketing Website/ Landing Page",
              "Analytics Integration",
              "Backend solutions",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

"use client"
import React from 'react'

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="newsletter-section ptb-100" style={{ backgroundImage: 'url(/assets/images/banner/newsletter-bg.jpg)' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="text-center">
              <span className="cr-subtitle fw-semibold position-relative primary-text-color">What's Going On</span>
              <h2 className="mt-4">Subscribe to our <span className="primary-text-color primary-bg-light">Newsletter</span></h2>
              <form onSubmit={handleSubmit} className="d-flex align-items-center gap-3 newsletter-form mt-60">
                <input type="text" placeholder="Full Name*" className="theme-input" />
                <input type="text" placeholder="Email Address*" className="theme-input" />
                <button type="submit" className="template-btn primary-btn flex-shrink-0">Subscribe<span className="ms-2"><i className="fas fa-arrow-right"></i></span></button>
              </form>
              <p className="mb-0 fw-medium mt-5">We won't spam you. Keep you updated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"
import Image from 'next/image'
import React from 'react'

export default function ProjectDetailsSection() {
  return (
    <section className="project-details ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature-image mb-5">
              <Image src="/assets/images/banner/project-banner-lg.jpg" alt="not found" className="img-fluid rounded-4" width={1921} height={976} />
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="project-details-content">
              <h5 className="mb-4">Biggest Marketing Strategry Development</h5>
              <p className="mb-60">Holisticly benchmark functional products fore excellent methods of emporment. Seamlessly visualize innovative readiness whereas extensive initiatives. Completely unleash frictionless data via end to end services. Continually unleash virtual e tailers through magnetic core compncies. Interactively engage distributed alments via focused alignments. Dynamically fabricate excellent innovation for go forward technology. Intrinsicly impact empowered scenarios after cost effective outsourcing productivate pandemic e business</p>
              <h5 className="mb-4">The Challenge Of Project</h5>
              <p className="mb-5">Interactively engage distributed alignments via focused alignments. Dynamically fabricate excellent  go forward technology. Intrinsicly impact empowered scenarios after cost effective outsourcing. Synenvtically productivate pandemic e-business rather than state of the art e-tailers. Completely unleash frictionless data via  services. Continually unleash virtual e tailers through magnetic core competencies.</p>
              <div className="d-flex align-items-center gap-4">
                <div className="feature-image">
                  <Image src="/assets/images/projects/pd-1.jpg" alt="feature image" className="img-fluid rounded-4" width={611} height={526} />
                </div>
                <div className="feature-image">
                  <Image src="/assets/images/projects/pd-2.jpg" alt="feature image" className="img-fluid rounded-4" width={611} height={526} />
                </div>
              </div>
              <p className="mb-0 mt-5">Completely unleash frictionless data via end to end services. Continually unleash virtual e tailers through magnetic core competencies. Interactively engage distributed alignments via focused alignments. excellent innovation for go forward technology. Intrinsicly impact empowered scenarios...</p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="pd-sidebar">
              <div className="info-sidebar-widget">
                <h6 className="mb-4">Project Information</h6>
                <div className="icon-box">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="fas fa-user"></i>
                  </span>
                  <div>
                    <span>Clients</span>
                    <h6 className="mb-0 mt-1 fs-18">Josefin H. Smith</h6>
                  </div>
                </div>
                <div className="icon-box">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="fa-solid fa-layer-group"></i>
                  </span>
                  <div>
                    <span>Category</span>
                    <h6 className="mb-0 mt-1 fs-18">Digital Marketing, SEO</h6>
                  </div>
                </div>
                <div className="icon-box">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="fa-solid fa-calendar-days"></i>
                  </span>
                  <div>
                    <span>Date:</span>
                    <h6 className="mb-0 mt-1 fs-18">15 March, 2023</h6>
                  </div>
                </div>
                <div className="icon-box">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  <div>
                    <span>Address</span>
                    <h6 className="mb-0 mt-1 fs-18">258 Dancing Street, USA</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
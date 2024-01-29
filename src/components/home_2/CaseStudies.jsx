"use client"
import React, { Fragment, useState } from 'react'
import { case_studies } from './home_2_data.js'
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function CaseStudies() {

  // track active hover item 
  const [activeCase, setActiveCase] = useState('case-1');

  // Function to handle hover effect
  const handleCaseStudyHover = (caseId) => {
    setActiveCase(`case-${caseId}`);
  };

  return (
    <section className="ptb-100 case-study-area position-relative z-1 overflow-hidden" style={{ backgroundImage: `url('assets/images/shapes/bg-shape.jpg')` }}>
      <div className="container">
        <div className="row justify-content-between g-4">
          <div className="col-xl-6">
            <div className="section-title">
              <span className="cr-subtitle position-relative primary-text-color fw-semibold">Our Latest Projects</span>
              <h2 className="mt-4 mb-0 text-white">Latest Case <span className="text-white primary-bg-color px-2">Studies</span></h2>
            </div>
          </div>
          <div className="col-xl-6 align-self-end">
            <div className="text-end d-none d-xl-block">
              <Link href="/project" className="template-btn secondary-btn text-white">View All Projects</Link>
            </div>
          </div>
        </div>
        <div className="case-study-box mt-80 position-relative">
          {case_studies && case_studies.map((caseStudy) => (
            <Fragment key={caseStudy.id}>
              <Image
                src={caseStudy.hover_image}
                alt="case"
                width={331}
                height={452}
                className={`img-fluid case-images case-${caseStudy.id} ${activeCase === `case-${caseStudy.id}` ? 'active' : ''}`}
              />
              <div
                className={`case-study-single d-flex align-items-center justify-content-between gap-4 ${activeCase === `case-${caseStudy.id}` ? 'active' : ''}`}
                data-case={`case-${caseStudy.id}`}
                onMouseEnter={() => handleCaseStudyHover(caseStudy.id)}
              >
                <div className="d-flex align-items-center gap-5 content-left">
                  <span className="tag-btn">{caseStudy.tag}</span>
                  <Link href={caseStudy.link}>
                    <h6 className="mb-0 fw-semibold text-white">{caseStudy.title}</h6>
                  </Link>
                </div>
                <span className="date fw-medium">{caseStudy.days}</span>
              </div>
            </Fragment>
          ))}

        </div>
        <div className="text-center d-xl-none mt-5">
          <Link href="/project" className="template-btn secondary-btn text-white">View All Projects</Link>
        </div>
      </div>
    </section>
  )
}
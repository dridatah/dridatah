"use client"
import React from 'react'

export default function ExperienceSection() {
  return (
    <section className="hm4-exp-section ptb-100">
      <div className="container">
        <div className="hm4-exp-box d-flex flex-wrap flex-xl-nowrap align-items-center justify-content-between">
          <div className="exp-left position-relative">
            <span className="exp-badge"><span>Experience</span></span>
            <ul className="exp-list">
              <li className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="exp-content-left">
                  <h6 className="mb-0">BSc in Computer Science</h6>
                  <span className="primary-text-color fw-medium">Amar Bazar Ltd. Full-time</span>
                </div>
                <span>2016-2022</span>
              </li>
              <li className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="exp-content-left">
                  <h6 className="mb-0">Sr. UI/UX Specialist</h6>
                  <span className="primary-text-color fw-medium">Amar Bazar Ltd. Full-time</span>
                </div>
                <span>2016-2022</span>
              </li>
              <li className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="exp-content-left">
                  <h6 className="mb-0">Website Plugins Designer</h6>
                  <span className="primary-text-color fw-medium">Amar Bazar Ltd. Full-time</span>
                </div>
                <span>2016s-2022</span>
              </li>
            </ul>
          </div>
          <div className="exp-right position-relative">
            <span className="exp-badge"><span>Education</span></span>
            <ul className="exp-list">
              <li className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="exp-content-left">
                  <h6 className="mb-0">CoderHouse Courses</h6>
                  <span className="primary-text-color fw-medium">Amar Bazar Ltd. Full-time</span>
                </div>
                <span>2016-2022</span>
              </li>
              <li className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="exp-content-left">
                  <h6 className="mb-0">National Academy of Arts</h6>
                  <span className="primary-text-color fw-medium">Amar Bazar Ltd. Full-time</span>
                </div>
                <span>2016-2022</span>
              </li>
              <li className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                <div className="exp-content-left">
                  <h6 className="mb-0">BSc in Computer Science</h6>
                  <span className="primary-text-color fw-medium">Amar Bazar Ltd. Full-time</span>
                </div>
                <span>2016s-2022</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
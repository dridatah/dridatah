"use client"
import React from 'react'

export default function ServiceAccordion() {
  return (
    <div className="accordion srd-accordion mt-60" id="accordion2">
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#acc_1" data-bs-toggle="collapse">01 What Is The Design Process For Branding?</a>
        </div>
        <div className="accordion-collapse collapse show" id="acc_1" data-bs-parent="#accordion2">
          <div className="accordion-body">
            <p className="mb-0">Progressively communicate flexible human capital with best-of-breed schemas. Completely develop 2.0 infrastructures via bleeding-edge opportunities. Completely initiate world-class leadership skills via fully tested applications. Objectively seize dynamic e-services and accurate markets.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#acc_2" data-bs-toggle="collapse" className="collapsed">02 How Much Does Logo Design Services Cost?</a>
        </div>
        <div className="accordion-collapse collapse" id="acc_2" data-bs-parent="#accordion2">
          <div className="accordion-body">
            <p className="mb-0">Progressively communicate flexible human capital with best-of-breed schemas. Completely develop 2.0 infrastructures via bleeding-edge opportunities. Completely initiate world-class leadership skills via fully tested applications. Objectively seize dynamic e-services and accurate markets.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#acc_3" data-bs-toggle="collapse" className="collapsed">03 How Long Will It Take To Complete My Project?</a>
        </div>
        <div className="accordion-collapse collapse" id="acc_3" data-bs-parent="#accordion2">
          <div className="accordion-body">
            <p className="mb-0">Progressively communicate flexible human capital with best-of-breed schemas. Completely develop 2.0 infrastructures via bleeding-edge opportunities. Completely initiate world-class leadership skills via fully tested applications. Objectively seize dynamic e-services and accurate markets.</p>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#acc_4" data-bs-toggle="collapse" className="collapsed">04 What Is Included In A Round Of Revisions?</a>
        </div>
        <div className="accordion-collapse collapse" id="acc_4" data-bs-parent="#accordion2">
          <div className="accordion-body">
            <p className="mb-0">Progressively communicate flexible human capital with best-of-breed schemas. Completely develop 2.0 infrastructures via bleeding-edge opportunities. Completely initiate world-class leadership skills via fully tested applications. Objectively seize dynamic e-services and accurate markets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
"use client"
import React from 'react'
import Sidebar from './Sidebar'
import Accordion from './Accordion'

export default function FaqSection() {
  return (
    <div className="faq-section ptb-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="faq-left">
              <Accordion />
            </div>
          </div>
          <div className="col-xl-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
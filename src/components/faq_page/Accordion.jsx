"use client"
import Image from 'next/image'
import React from 'react'

export default function Accordion() {
  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#accordion_1" data-bs-toggle="collapse">What is Digital Marketing Solution</a>
        </div>
        <div className="accordion-collapse collapse show" id="accordion_1" data-bs-parent="#accordion">
          <div className="accordion-body p-0">
            <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
              <div className="feature-image">
                <Image src="/assets/images/ab-1.jpg" alt="not found" className="img-fluid rounded-4" width={226} height={135} />

              </div>
              <p className="mb-0">Aenean at lobortis tincidunt felis nulla nisl semper nullam justo, eros natoque faucibus senectus erat nunc nostra himenaeos sem turpis, mi libero sociosqu nec ridiculus penatibus donec aliquet vulputate. Venenatis vulputate ultrices eleifend dapibus phasellus tempus vehicula facilisi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#accordion_2" data-bs-toggle="collapse" className="collapsed">Design & Development</a>
        </div>
        <div className="accordion-collapse collapse" id="accordion_2" data-bs-parent="#accordion">
          <div className="accordion-body p-0">
            <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
              <div className="feature-image">
                <Image src="/assets/images/ab-1.jpg" alt="not found" className="img-fluid rounded-4" width={226} height={135} />
              </div>
              <p className="mb-0">Aenean at lobortis tincidunt felis nulla nisl semper nullam justo, eros natoque faucibus senectus erat nunc nostra himenaeos sem turpis, mi libero sociosqu nec ridiculus penatibus donec aliquet vulputate. Venenatis vulputate ultrices eleifend dapibus phasellus tempus vehicula facilisi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#accordion_3" data-bs-toggle="collapse" className="collapsed">UI/UX Product Design</a>
        </div>
        <div className="accordion-collapse collapse" id="accordion_3" data-bs-parent="#accordion">
          <div className="accordion-body p-0">
            <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
              <div className="feature-image">
                <Image src="/assets/images/ab-1.jpg" alt="not found" className="img-fluid rounded-4" width={226} height={135} />
              </div>
              <p className="mb-0">Aenean at lobortis tincidunt felis nulla nisl semper nullam justo, eros natoque faucibus senectus erat nunc nostra himenaeos sem turpis, mi libero sociosqu nec ridiculus penatibus donec aliquet vulputate. Venenatis vulputate ultrices eleifend dapibus phasellus tempus vehicula facilisi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#accordion_4" data-bs-toggle="collapse" className="collapsed">Website Development</a>
        </div>
        <div className="accordion-collapse collapse" id="accordion_4" data-bs-parent="#accordion">
          <div className="accordion-body p-0">
            <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
              <div className="feature-image">
                <Image src="/assets/images/ab-1.jpg" alt="not found" className="img-fluid rounded-4" width={226} height={135} />
              </div>
              <p className="mb-0">Aenean at lobortis tincidunt felis nulla nisl semper nullam justo, eros natoque faucibus senectus erat nunc nostra himenaeos sem turpis, mi libero sociosqu nec ridiculus penatibus donec aliquet vulputate. Venenatis vulputate ultrices eleifend dapibus phasellus tempus vehicula facilisi</p>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <div className="accordion-header">
          <a href="#accordion_5" data-bs-toggle="collapse" className="collapsed">Content Strategy</a>
        </div>
        <div className="accordion-collapse collapse" id="accordion_5" data-bs-parent="#accordion">
          <div className="accordion-body p-0">
            <div className="d-flex align-items-center gap-4 flex-wrap flex-md-nowrap">
              <div className="feature-image">
                <Image src="/assets/images/ab-1.jpg" alt="not found" className="img-fluid rounded-4" width={226} height={135} />
              </div>
              <p className="mb-0">Aenean at lobortis tincidunt felis nulla nisl semper nullam justo, eros natoque faucibus senectus erat nunc nostra himenaeos sem turpis, mi libero sociosqu nec ridiculus penatibus donec aliquet vulputate. Venenatis vulputate ultrices eleifend dapibus phasellus tempus vehicula facilisi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
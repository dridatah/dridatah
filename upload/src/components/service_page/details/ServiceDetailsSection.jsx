"use client"
import Image from 'next/image'
import React from 'react'
import ServiceAccordion from './ServiceAccordion'
import ServiceSidebar from './ServiceSidebar'
export default function ServiceDetailsSection() {
  return (
    <section className="service-details ptb-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-8">
            <div className="service-details-content">
              <div className="feature-image mb-5">
                <Image src="/assets/images/services/service-banner.jpg" alt="not found" className="img-fluid rounded-4" width={1265} height={826} />
              </div>
              <h4 className="mb-4">Business Website Development</h4>
              <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus et, dignissim mollis dictumst orci mus duis nisi commodo diam, cursus blandit imperdiet neque integer bibendum luctus tempor. Pulvinar nullam lobortis duis neque at pretium dis cubilia fusce, mus hendrerit interdum euismod nibh cum nascetur natoque sed, placerat litora eleifend nam turpis eu lacinia bibendum. Augue curae ultricies facilisis.</p>
              <p className="mb-60">rhoncus maecenas lacus cubilia fringilla nisi, fermentum magnis sociosqu nam nisl sagittis vitae netus mus hac, lectus est et malesuada porta tempor placerat neque. Id porttitor donec aliquam condimentum bibendum inceptos a, imperdiet dui phasellus nisl metus scelerisque, torquent commodo.</p>
              <div className="srd-feature-box d-flex align-items-center gap-4 rounded-4 light-bg overflow-hidden flex-wrap flex-md-nowrap">
                <div className="image-wrapper">
                  <Image src="/assets/images/services/sr-1.jpg" alt="not found" className="img-fluid" width={491} height={377} />
                </div>
                <div>
                  <h5 className="mb-3">Service Features</h5>
                  <p className="mb-4">Pulvinar nullam lobortis duis neque at pretium dis cubilia fusce, mus hendrerit interdum euismod</p>
                  <ul className="srd-feature-list">
                    <li><span className="me-2"><i className="fa-regular fa-circle-check"></i></span>We Provide Flexible Product Services</li>
                    <li><span className="me-2"><i className="fa-regular fa-circle-check"></i></span>Best Creative Solution with Our Team</li>
                    <li><span className="me-2"><i className="fa-regular fa-circle-check"></i></span>Award Winning Digital Solutions</li>
                  </ul>
                </div>
              </div>
              <p className="mt-60">Pulvinar per velit viverra eleifend ultricies condimentum proin class metus, dictum potenti mollis semper hac vulputate sociis. Risus class nam nec porta venenatis parturient, eu fringilla cum nascetur etiam magnis eget, mus vel mattis facilisi dictumst. Suscipit cras morbi diam hendrerit ac nulla feugiat nibh, habitant sociosqu ultrices fringilla lacus platea nisl suspendisse, vulputate blandit himenaeos nostra lacinia mi placerat</p>

              <ServiceAccordion />
            </div>
          </div>
          <div className="col-xl-4">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
"use client";
import Image from "next/image";
import { PropTypes } from "prop-types";
import React from "react";

/**
 * Contact Section Component
 * @param {string} props.wrapper_class - The CSS class for the wrapper element of the contact section.
 */

export default function ContactSection({ wrapper_class }) {
  return (
    <section
      id="contact"
      className={`contact-section dark-bg-color ptb-100 position-relative z-1 overflow-hidden ${wrapper_class}`}
    >
      <span className="circle-shape position-absolute z--1 rounded-circle"></span>
      <span className="circle-shape-2 position-absolute z--1 rounded-circle"></span>
      <span className="circle-shape-3 position-absolute z--1 rounded-circle"></span>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-6">
            <div className="contact-info">
              {/* <span
                suppressHydrationWarning
                className="cr-subtitle text-white position-relative fw-semibold wow fadeInUp d-inline-block"
              >
                100% discount on early purchase
              </span> */}
              <h2
                suppressHydrationWarning
                className="mb-4 mt-4 text-white wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Let's Work Together
              </h2>
              <p
                suppressHydrationWarning
                className="lead fw-medium wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Unleash your digital potential. Share your project vision and
                requirements for expert insights and a tailored development
                process, crafted by our dedicated tech and product specialists.
                Expect a comprehensive response within 24 hours. No spam, just
                direct collaboration.
              </p>
              <ul className="contact-info-list mt-5">
                <li
                  suppressHydrationWarning
                  className="d-flex align-items-center gap-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                    <Image
                      src="/assets/images/icons/mail.svg"
                      alt="mail"
                      width={38}
                      height={35}
                      className="img-fluid"
                    />
                  </span>
                  <div>
                    <span className="fw-medium fs-xl">Mail Us</span>
                    <a href="mailto:info@dridatah.com">
                      <h6 className="mb-0 text-white fw-semibold mt-1">
                        info@dridatah.com
                      </h6>
                    </a>
                  </div>
                </li>
                <li
                  suppressHydrationWarning
                  className="d-flex align-items-center gap-4 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                    <Image
                      src="/assets/images/icons/phone.svg"
                      alt="mail"
                      width={38}
                      height={35}
                      className="img-fluid"
                    />
                  </span>
                  <div>
                    <span className="fw-medium fs-xl">Call Us</span>
                    <a href="tel:0045611227890">
                      <h6 className="mb-0 text-white fw-semibold mt-1">
                        +91 9080 617 982
                      </h6>
                    </a>
                  </div>
                </li>
                {/* <li
                  suppressHydrationWarning
                  className="d-flex align-items-center gap-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                    <Image
                      src="/assets/images/icons/location.svg"
                      alt="mail"
                      width={38}
                      height={35}
                      className="img-fluid"
                    />
                  </span>
                  <div>
                    <span className="fw-medium fs-xl">Address</span>
                    <h6 className="mb-0 text-white fw-semibold mt-1">
                      214 Berlin, Germany
                    </h6>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-box bg-white">
              <h3 className="mb-32">
                Get a free
                <span className="primary-bg-light primary-text-color px-2">
                  quote now
                </span>
              </h3>
              <form className="contact-form">
                <label>
                  Name*
                  <input
                    type="text"
                    placeholder="Jhon Smith"
                    className="theme-input mt-2"
                  />
                </label>
                <label>
                  Email*
                  <input
                    type="email"
                    placeholder="info@dridatah.com"
                    className="theme-input mt-2"
                  />
                </label>
                <label>
                  How can we help you?*
                  <textarea
                    className="theme-input mt-2"
                    placeholder="Type your message here..."
                    rows="4"
                  ></textarea>
                </label>
                <button type="submit" className="template-btn primary-btn">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// PropTypes for the ContactSection component
ContactSection.propTypes = {
  wrapper_class: PropTypes.string,
};

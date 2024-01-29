import Image from "next/image";
import React from "react";

export default function ContactSection() {
  return (
    <section
      className="contact-section ptb-100 position-relative z-1 overflow-hidden hm3-light-bg"
      id="contact"
    >
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-xl-6">
            <div className="contact-info">
              <span
                suppressHydrationWarning
                className="cr-subtitle primary-text-color position-relative fw-semibold wow fadeInUp d-inline-block"
              >
                Appointment
              </span>
              <h2
                suppressHydrationWarning
                className="mb-4 mt-4 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Let's <br />
                <span className="primary-text-color primary-bg-light px-1 text-italic fw-normal">
                  Work Together
                </span>
              </h2>
              <p
                suppressHydrationWarning
                className="lead fw-medium wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Interdum condimentum congue conubia netus neque lentesque
                curabitur etiam nisl montes, gravida luctus nec morbi dignissim
                ridiculus nam hendrerit ullamcorper, euismod
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
                      className="img-fluid"
                      width={40}
                      height={40}
                    />
                  </span>
                  <div>
                    <span className="fw-medium fs-xl primary-text-color">
                      Mail Us
                    </span>
                    <a href="mailto:info@dridatah.com">
                      <h6 className="mb-0 fw-semibold mt-1">
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
                      className="img-fluid"
                      width={40}
                      height={40}
                    />
                  </span>
                  <div>
                    <span className="fw-medium fs-xl primary-text-color">
                      Cal Us
                    </span>
                    <a href="tel:0045611227890">
                      <h6 className="mb-0 fw-semibold mt-1">
                        (00) 456 1122 7890
                      </h6>
                    </a>
                  </div>
                </li>
                <li
                  suppressHydrationWarning
                  className="d-flex align-items-center gap-4 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                    <Image
                      src="/assets/images/icons/location.svg"
                      alt="mail"
                      className="img-fluid"
                      width={40}
                      height={40}
                    />
                  </span>
                  <div>
                    <span className="fw-medium fs-xl primary-text-color">
                      Address
                    </span>
                    <h6 className="mb-0 fw-semibold mt-1">
                      214 Berlin, Germany
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-box bg-white">
              <h3 className="mb-32">
                Get a free{" "}
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

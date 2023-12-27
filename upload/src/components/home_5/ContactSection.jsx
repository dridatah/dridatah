"use client"
import Image from 'next/image';
import React from 'react'
import { useSelector } from 'react-redux';

export default function ContactSection() {
  // get active section from global state
  const activeSection = useSelector((state) => state.global.home_five_active_section);
  return (
    <section className={`main-content-wrapper hm5-box contact_box ${activeSection === 'contact' && 'active'}`} id="contact">
      <div className="hm5-contact-section">
        <div className="container-1660">
          <div className="row align-items-center g-5">
            <div className="col-xl-6">
              <div className="contact-form-box bg-white">
                <h3 className="mb-32">Get a free <span className="primary-bg-light primary-text-color px-2">quote now</span></h3>
                <form className="contact-form">
                  <label>
                    Name*
                    <input type="text" placeholder="Jhon Smith" className="theme-input mt-2" />
                  </label>
                  <label>
                    Email*
                    <input type="email" placeholder="info@example.com" className="theme-input mt-2" />
                  </label>
                  <label>
                    How can we help you?*
                    <textarea className="theme-input mt-2" placeholder="Type your message here..." rows="4"></textarea>
                  </label>
                  <button type="submit" className="template-btn primary-btn">Submit Message</button>
                </form>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-info">
                <span suppressHydrationWarning className="cr-subtitle text-white position-relative fw-semibold wow fadeInUp d-inline-block">100% discount on early purchase</span>
                <h2 suppressHydrationWarning className="mb-4 mt-4 text-white wow fadeInUp" data-wow-delay="0.2s">Let's Work Together</h2>
                <p suppressHydrationWarning className="lead fw-medium wow fadeInUp" data-wow-delay="0.3s">Interdum condimentum congue conubia netus neque lentesque curabitur etiam nisl montes, gravida luctus nec morbi dignissim ridiculus nam hendrerit ullamcorper, euismod</p>
                <ul className="contact-info-list mt-5 hm5-contact-info-list">
                  <li suppressHydrationWarning className="d-flex align-items-center gap-4 wow fadeInUp" data-wow-delay="0.1s">
                    <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                      <Image src="/assets/images/icons/mail.svg" alt="mail" className="img-fluid" width={40} height={40} />
                    </span>
                    <div>
                      <span className="fw-medium fs-xl">Mail Us</span>
                      <a href="mailto:info@example.com"><h6 className="mb-0 fw-semibold mt-1">info@example.com</h6></a>
                    </div>
                  </li>
                  <li suppressHydrationWarning className="d-flex align-items-center gap-4 wow fadeInUp" data-wow-delay="0.2s">
                    <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                      <Image src="/assets/images/icons/phone.svg" alt="mail" className="img-fluid" width={40} height={40} />
                    </span>
                    <div>
                      <span className="fw-medium fs-xl">Cal Us</span>
                      <a href="tel:0045611227890"><h6 className="mb-0 fw-semibold mt-1">(00) 456 1122 7890</h6></a>
                    </div>
                  </li>
                  <li suppressHydrationWarning className="d-flex align-items-center gap-4 wow fadeInUp" data-wow-delay="0.3s">
                    <span className="icon d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
                      <Image src="/assets/images/icons/location.svg" alt="mail" className="img-fluid" width={40} height={40} />
                    </span>
                    <div>
                      <span className="fw-medium fs-xl">Address</span>
                      <h6 className="mb-0 fw-semibold mt-1">214 Berlin, Germany</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="hm5-map-box position-relative mt-120">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.098979857154!2d7.525950276920745!3d50.97736104928544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bec82ce946b679%3A0xb9d62e4ae5b6a1b3!2sBerlinstra%C3%9Fe%2C%2051645%20Gummersbach%2C%20Germany!5e0!3m2!1sen!2sbd!4v1687846796236!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <button className="pin-btn position-absolute start-50 top-50 translate-middle rounded-circle d-flex align-items-center justify-content-center"><i className="fa-solid fa-location-dot"></i></button>
          </div>
        </div>
      </div>
    </section>
  )
}
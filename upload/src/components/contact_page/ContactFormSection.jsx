"use client"
import NiceSelect from '@/plugins/niceSelect/NiceSelect';
import React from 'react'

export default function ContactFormSection() {
  // Select Options
  const options = [
    'Select Queary Topic',
    'Queary Topic 1',
    'Queary Topic 2',
    'Queary Topic 3'];

  // onChange Function
  const handleSelectChange = (selectedValue) => {
    console.log(selectedValue);
  }

  return (
    <section className="contact-form-area ptb-100 bg-light-white position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="ct-left">
              <span className="cr-subtitle position-relative fw-semibold primary-text-color">What's Going On</span>
              <h2 className="mt-4 mb-5">You can connect with us when need help!</h2>
              <form className="ct-contact-form">
                <div className="d-flex align-items-center gap-3">
                  <div className="input-field position-relative width-half">
                    <input type="text" placeholder="Your Name" className="theme-input" />
                  </div>
                  <div className="input-field position-relative width-half">
                    <input type="text" placeholder="Email Address" className="theme-input" />
                  </div>
                </div>
                <div className="mt-4">
                  <NiceSelect options={options} defaultValue={options[0]} onChange={handleSelectChange} />
                </div>
                <textarea className="theme-input mt-4" placeholder="Type Your Message" rows="5"></textarea>
                <button type="submit" className="template-btn primary-btn mt-4">Send Message Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.227684015649!2d-2.2353612228296296!3d53.48226152232902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bebb5c3441%3A0xda5a4bbb643f40b3!2smaxitaxi!5e0!3m2!1sen!2sbd!4v1687151167197!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" ></iframe>
      </div>
    </section>
  )
}
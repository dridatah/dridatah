"use client"
import NiceSelect from '@/plugins/niceSelect/NiceSelect'
import Image from 'next/image'
import React from 'react'

export default function AppointmentSection() {

  // Select Options
  const options = ['Select Service', 'Service One', 'Service Two', 'Service Three'];

  // Handle onChange Function
  const handleSelectChange = (selectedValue) => {
    console.log(selectedValue);
  }
  return (
    <section className="appointment-section pt-100">
      <div className="container">
        <div className="bg-light-white rounded-4 app-box">
          <div className="row align-items-center g-4">
            <div className="col-xl-5 col-lg-6">
              <div className="image-wrapper">
                <Image src="/assets/images/about/ab-1.jpg" alt="not found" className="img-fluid rounded-start-4" width={742} height={823} />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="app-form-wrapper ps-sm-4">
                <h4 className="mb-5">Make An Appointment</h4>
                <form className="app-form">
                  <div className="d-flex align-items-center double-input gap-4">
                    <div className="input-field">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="input-field">
                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="input-field position-relative clearfix mt-4">
                    <NiceSelect options={options} defaultValue={options[0]} onChange={handleSelectChange} />
                  </div>
                  <div className="d-flex align-items-center double-input gap-4 mt-4">
                    <div className="input-field">
                      <input type="date" />
                    </div>
                    <div className="input-field">
                      <input type="time" />
                    </div>
                  </div>
                  <div className="input-field mt-4">
                    <button type="submit" className="template-btn primary-btn">Submit Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"
import NiceSelect from '@/plugins/niceSelect/NiceSelect';
import React from 'react'

export default function ReplyBox() {

  const options = [
    'Select Queary Topic',
    'Queary Topic 1',
    'Queary Topic 2',
    'Queary Topic 3'];

  const handleSelectChange = (selectedValue) => {
    console.log(selectedValue);
  }
  return (
    <div className="bdp-box mt-60">
      <h4 className="mb-3">Leave A Reply</h4>
      <p className="mb-40">Your email address will not be published. Required fields are marked *</p>
      <form className="bdp-reply-form">
        <div className="row g-3">
          <div className="col-xl-6">
            <div className="input-field">
              <input type="text" placeholder="Your Name" className="theme-input" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="input-field">
              <input type="text" placeholder="Your Name" className="theme-input" />
            </div>
          </div>
          <div className="col-12">
            <div className="input-field">
              <NiceSelect options={options} defaultValue={options[0]} onChange={handleSelectChange} wrapperClass={`w-100`} />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="input-field">
              <textarea className="theme-input" placeholder="Write Your Message" rows="6"></textarea>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="template-btn primary-btn mt-3">Submit Message</button>
          </div>
        </div>
      </form>
    </div>
  )
}
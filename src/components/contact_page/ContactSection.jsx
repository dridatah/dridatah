"use client";
import React from "react";
import ContactBox from "../single/contact/ContactBox";

export default function ContactSection() {
  return (
    <section className="contact-section ptb-100">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-xl-4 col-sm-6">
            <ContactBox
              thumbnail={`/assets/images/contact/ct-1.jpg`}
              icon={`/assets/images/icons/icon-14.svg`}
              title={`Call Us 24/7`}
              subtitle={`+91 9080 617 982`}
            />
          </div>
          <div className="col-xl-4 col-sm-6">
            <ContactBox
              thumbnail={`/assets/images/contact/ct-2.jpg`}
              icon={`/assets/images/icons/icon-15.svg`}
              title={`Make a Quote`}
              subtitle={`info@dridatah.com`}
            />
          </div>
          <div className="col-xl-4 col-sm-6">
            <ContactBox
              thumbnail={`/assets/images/contact/ct-3.jpg`}
              icon={`/assets/images/icons/icon-16.svg`}
              title={`Service Station`}
              subtitle={`Trivandrum, Kerala`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

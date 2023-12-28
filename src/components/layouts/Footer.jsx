"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section pt-100 position-relative z-1 overflow-hidden">
      <div className="footer-top">
        <div className="container position-relative z-1">
          <span className="rectangle-shape-1 position-absolute z--1"></span>
          <span className="rectangle-shape-2 position-absolute z--1"></span>
          <div className="row justify-content-center mb-100">
            <div className="col-xl-7">
              <div className="text-center">
                <h2 className="text-white mb-4">Have a Project in Mind?</h2>
                <p className="mb-32">
                  Luctus sapien pellentesque arcu fermentum accumsan tempus nam
                  facilisis ullamcorper,
                </p>
                <Link href="/appointment" className="template-btn primary-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-100">
        <div className="container position-relative z-1">
          <div className="row g-4">
            <div className="col-xl-3 col-lg-4">
              <div className="footer-widget text-widget">
                <Image
                  src="/assets/images/logo-white.png"
                  alt="logo"
                  width={143}
                  height={44}
                  className="img-fluid"
                />
                <p className="my-32 text-white">
                  Tempus nula rhoncus euismod curae masa cras justo quisque
                  semper usto molestie primis porttitor
                </p>
                <div className="footer-social">
                  <Link href="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  <Link href="/">
                    <i className="fab fa-skype"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4">
              <div className="footer-widget nav-widget">
                <h6 className="widget-title">Company</h6>
                <ul className="footer-links">
                  <li>
                    <Link href="/">Help Center</Link>
                  </li>
                  <li>
                    <Link href="/">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              <div className="footer-widget schedule-widget">
                <h6 className="widget-title">Working Time</h6>
                <ul className="schedule-list">
                  <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
                  <li>Saturday: 10:00 AM - 6:00 PM</li>
                  <li>Sunday Closed</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="footer-widget footer-newsletter">
                <h6 className="widget-title">Sign up for the newsletter</h6>
                <form>
                  <div className="newsletter-form d-flex align-items-center">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="theme-input"
                    />
                    <button type="submit" className="template-btn primary-btn">
                      Sign Up
                    </button>
                  </div>
                  <label className="text-white mt-4">
                    <span className="me-2 d-inline-block">
                      <input type="checkbox" />
                      <span>
                        <i className="fas fa-check"></i>
                      </span>{" "}
                    </span>
                    I'm okay with getting emails and having that tracked to
                    improve my experience
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright mt-60 py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright-text">
                <p className="mb-0 text-white">
                  &copy;2024 Dridatah. All Rights Reserved
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="copyright-links">
                {/* <Link href="/">Security</Link> */}
                <Link href="/">Privacy & Policy</Link>
                <Link href="/">Terms & Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="circle-shape-1 position-absolute z--1 rounded-circle"></span>
      <span className="circle-shape-2 position-absolute z--1 rounded-circle"></span>
    </footer>
  );
}

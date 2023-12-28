"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutSection() {
  return (
    <section
      className="hm4-about-section ptb-100 hm3-light-bg overflow-hidden"
      id="about"
    >
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-xl-5">
            <div className="hm4-about-left">
              <Image
                src="/assets/images/home-4/ab-1.jpg"
                alt="not found"
                className="img-fluid"
                width={793}
                height={987}
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="about-right">
              <h3 className="mb-4">Oliver William</h3>
              <span className="fw-medium primary-text-color">
                Founder & CEO
              </span>
              <p className="fw-medium mb-0 text-headings-color mt-40">
                Continually utilize 24/365 bandwidth before real-time interfaces
                grow team core
              </p>
              <p className="fw-medium">
                competencies with pandemic commerce. Objectively initiate
                pandemic users with deliver bricks clicks meta services for
                bricks and clicks innovation streamline front end aradigms
                expedite granular human capital rather than intuitive testing
                procedures
              </p>
              <div className="mt-5 bg-white rounded-4 hm4-ab-info team-d-info">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="td-icon-box d-flex align-items-center flex-wrap">
                      <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white theme-shadow">
                        <i className="fa-solid fa-user"></i>
                      </span>
                      <div>
                        <span>Experience</span>
                        <h6 className="mb-0 mt-1 fs-18">More Than 10 Years</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="td-icon-box d-flex align-items-center flex-wrap">
                      <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white theme-shadow">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <div>
                        <span>Phone</span>
                        <a href="tel:2562145821456">
                          <h6 className="mb-0 mt-1 fs-18">
                            +(256) 21458-21456
                          </h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="td-icon-box d-flex align-items-center flex-wrap">
                      <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white theme-shadow">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                      <div>
                        <span>Email</span>
                        <a href="mailto:info@dridatah.com">
                          <h6 className="mb-0 mt-1 fs-18">info@dridatah.com</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="td-icon-box d-flex align-items-center flex-wrap">
                      <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white theme-shadow">
                        <i className="fa-solid fa-fax"></i>
                      </span>
                      <div>
                        <span>Fax</span>
                        <h6 className="mb-0 mt-1 fs-18">+2568145632</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap gap-4 mt-40">
                <Link
                  href="/appointment"
                  className="template-btn primary-btn text-uppercase"
                >
                  Hire Me Now
                </Link>
                <button className="template-btn white-btn text-uppercase">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import React from "react";

export default function TeamDetailsSection() {
  return (
    <section className="team-details-area ptb-100 overflow-hidden">
      <div className="container">
        <div className="team-details">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="feature-image">
                <Image
                  src="/assets/images/team/team-d-1.jpg"
                  alt="team"
                  className="img-fluid rounded-4"
                  width={856}
                  height={743}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="teadm-details-content">
                <h3 className="mb-3">Oliver William</h3>
                <span className="fw-medium primary-text-color">
                  Founder & CEO
                </span>
                <p className="mt-4">
                  Continually utilize 24/365 bandwidth before real-time
                  interfaces grow team core competencies with pandemic commerce.
                  Objectively initiate pandemic users with deliver bricks clicks
                  meta services for bricks and clicks innovation streamline
                  front end aradigms expedite granular human capital rather than
                  intuitive testing procedures
                </p>
                <div className="mt-5 light-bg rounded-4 team-d-info">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="td-icon-box d-flex align-items-center flex-wrap">
                        <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white theme-shadow">
                          <i className="fa-solid fa-user"></i>
                        </span>
                        <div>
                          <span>Experience</span>
                          <h6 className="mb-0 mt-1 fs-18">
                            More Than 10 Years
                          </h6>
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
                            <h6 className="mb-0 mt-1 fs-18">
                              info@dridatah.com
                            </h6>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

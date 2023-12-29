"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function AboutSection() {
  return (
    <section
      className="cr-about-section ptb-100 overflow-hidden"
      id="cr-about-section"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="section-title">
              {/* <span className="cr-subtitle position-relative primary-text-color fw-semibold">
                Our Team Mates
              </span> */}
              <h2 className="mt-4">
                About Dridatah{" "}
                <span className="primary-text-color primary-bg-light px-2">
                  Technology
                </span>
              </h2>
            </div>
          </div>
        </div>
        {/* <ul suppressHydrationWarning className="nav nav-tabs cr-about-tab-control">
          <li><a suppressHydrationWarning href="#about" className="active" data-bs-toggle="tab">About Company</a></li>
          <li><a suppressHydrationWarning href="#mission" data-bs-toggle="tab">Our Mission</a></li>
          <li><a suppressHydrationWarning href="#vission" data-bs-toggle="tab">Our Visssion</a></li>
          <li><a suppressHydrationWarning href="#goal" data-bs-toggle="tab">Our Goal</a></li>
        </ul> */}
        <div className="tab-content mt-5">
          <div
            suppressHydrationWarning
            className="tab-pane fade show active"
            id="about"
          >
            <div className="row g-5 align-items-center">
              <div className="col-xl-6">
                <div className="img-left">
                  <Image
                    src="/assets/images/home-2/ab-1.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                    width={940}
                    height={750}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tab-content-right mx-532">
                  <span className="cr-subtitle position-relative primary-text-color fw-semibold">
                    More About Our Company
                  </span>
                  <h3 className="mb-32 mt-4">
                    We Build Software Solutions For Startups And Small
                    Businesses.
                  </h3>
                  <p className="mb-5">
                    At Dridatah, we partner with startups and small businesses
                    to unlock their full potential. We provide expert software
                    development services that deliver practical results,
                    including increased revenue, streamlined lead generation,
                    and a stronger online presence. We take pride in helping our
                    clients achieve their unique goals.
                  </p>
                  <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    {/* <Link href="/about" className="template-btn primary-btn">
                      Learn More
                    </Link> */}
                    <a href="tel:+919080617982" className="phone-btn">
                      <span className="icon">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4985 12.1221C14.0014 12.1774 13.6423 12.6469 13.6699 13.1717C13.7251 13.6689 14.1671 14.0556 14.7195 14.0004C15.2719 13.9451 15.8244 14.1109 16.2111 14.4975C16.6254 14.9119 16.7911 15.4643 16.7359 16.0167C16.6806 16.5692 17.0673 17.0111 17.5645 17.0663C17.8683 17.094 18.1446 16.9835 18.3379 16.7901C18.476 16.652 18.5865 16.431 18.6141 16.2377C18.7246 15.0776 18.3379 13.9727 17.5369 13.1717C16.7635 12.3983 15.6586 12.0116 14.4985 12.1221ZM14.1395 8.39323C13.587 8.44847 13.228 8.91803 13.2832 9.41522C13.3108 9.94003 13.7804 10.2991 14.3052 10.2715C16.0177 10.1058 17.6474 10.6858 18.8351 11.8735C19.9952 13.0336 20.6029 14.6909 20.4371 16.4034C20.3819 16.9006 20.741 17.3702 21.2658 17.3978C21.5696 17.4254 21.8182 17.3425 22.0116 17.1492C22.1773 16.9835 22.2601 16.7901 22.3154 16.5692C22.564 14.3318 21.7906 12.1221 20.1885 10.5201C18.5865 8.91803 16.4044 8.17226 14.1395 8.39323ZM13.7804 4.66435C13.2556 4.69197 12.8965 5.16153 12.9241 5.68634C12.9794 6.18352 13.4213 6.57022 13.9461 6.5426C16.7635 6.26638 19.5256 7.20551 21.5144 9.19425C23.4755 11.1554 24.4422 13.9451 24.166 16.7625C24.1384 17.2873 24.5251 17.7292 25.0223 17.7845C25.3261 17.8121 25.6023 17.7016 25.7957 17.5083C25.9338 17.3702 26.0167 17.1768 26.0443 16.9282C26.4033 13.586 25.2433 10.2715 22.8402 7.86842C20.4095 5.43774 17.1502 4.33289 13.7804 4.66435ZM10.6316 15.6024C10.9354 15.3538 11.0735 14.8842 10.9078 14.4975L9.49908 11.2659C9.33335 10.8239 8.83617 10.6029 8.42184 10.6858L5.3835 11.404C4.96918 11.4868 4.66534 11.9011 4.66534 12.3431C4.66534 19.9113 10.8249 26.0709 18.3932 26.0709C18.8351 26.0709 19.2494 25.7671 19.3323 25.3527L20.0504 22.3144C20.1333 21.9001 19.9123 21.4029 19.4704 21.2372L16.2387 19.8285C15.852 19.6627 15.3824 19.8008 15.1338 20.1047L13.808 21.7067C11.7088 20.7124 10.0239 19.0275 9.02951 16.9282L10.6316 15.6024Z"
                            fill="#1F1F1F"
                          />
                        </svg>
                      </span>
                      <div>
                        <h5 className="mb-1 fw-semibold fs-20">
                          +91 9080 617 982
                        </h5>
                        <span>For Any Question</span>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex align-items-center cr-tab-counter mt-40 flex-wrap flex-sm-nowrap">
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <CountUp end={1} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Years on the market
                      </h6>
                    </div>
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <CountUp end={15} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Projects delivered so far
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning className="tab-pane fade" id="mission">
            <div className="row g-5">
              <div className="col-xl-6">
                <div className="img-left">
                  <Image
                    src="/assets/images/home-2/ab-1.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                    width={940}
                    height={750}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tab-content-right mx-532">
                  <span className="cr-subtitle position-relative primary-text-color fw-semibold">
                    More About Our Company
                  </span>
                  <h3 className="mb-32 mt-4">
                    We Build Software Solutions For Big Industries
                  </h3>
                  <p className="mb-5">
                    Cras facilisi fringilla nisi sed eget vel quis sollicitudin
                    sagittis. Hendrerit metus nost magna interdum cum habitant
                    sodales, sollicitudin tincidunt consequat lacinia
                    ullamcorper enim aptent
                  </p>
                  <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    <Link href="/about" className="template-btn primary-btn">
                      Learn More
                    </Link>
                    <a href="tel:25259214893" className="phone-btn">
                      <span className="icon">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4985 12.1221C14.0014 12.1774 13.6423 12.6469 13.6699 13.1717C13.7251 13.6689 14.1671 14.0556 14.7195 14.0004C15.2719 13.9451 15.8244 14.1109 16.2111 14.4975C16.6254 14.9119 16.7911 15.4643 16.7359 16.0167C16.6806 16.5692 17.0673 17.0111 17.5645 17.0663C17.8683 17.094 18.1446 16.9835 18.3379 16.7901C18.476 16.652 18.5865 16.431 18.6141 16.2377C18.7246 15.0776 18.3379 13.9727 17.5369 13.1717C16.7635 12.3983 15.6586 12.0116 14.4985 12.1221ZM14.1395 8.39323C13.587 8.44847 13.228 8.91803 13.2832 9.41522C13.3108 9.94003 13.7804 10.2991 14.3052 10.2715C16.0177 10.1058 17.6474 10.6858 18.8351 11.8735C19.9952 13.0336 20.6029 14.6909 20.4371 16.4034C20.3819 16.9006 20.741 17.3702 21.2658 17.3978C21.5696 17.4254 21.8182 17.3425 22.0116 17.1492C22.1773 16.9835 22.2601 16.7901 22.3154 16.5692C22.564 14.3318 21.7906 12.1221 20.1885 10.5201C18.5865 8.91803 16.4044 8.17226 14.1395 8.39323ZM13.7804 4.66435C13.2556 4.69197 12.8965 5.16153 12.9241 5.68634C12.9794 6.18352 13.4213 6.57022 13.9461 6.5426C16.7635 6.26638 19.5256 7.20551 21.5144 9.19425C23.4755 11.1554 24.4422 13.9451 24.166 16.7625C24.1384 17.2873 24.5251 17.7292 25.0223 17.7845C25.3261 17.8121 25.6023 17.7016 25.7957 17.5083C25.9338 17.3702 26.0167 17.1768 26.0443 16.9282C26.4033 13.586 25.2433 10.2715 22.8402 7.86842C20.4095 5.43774 17.1502 4.33289 13.7804 4.66435ZM10.6316 15.6024C10.9354 15.3538 11.0735 14.8842 10.9078 14.4975L9.49908 11.2659C9.33335 10.8239 8.83617 10.6029 8.42184 10.6858L5.3835 11.404C4.96918 11.4868 4.66534 11.9011 4.66534 12.3431C4.66534 19.9113 10.8249 26.0709 18.3932 26.0709C18.8351 26.0709 19.2494 25.7671 19.3323 25.3527L20.0504 22.3144C20.1333 21.9001 19.9123 21.4029 19.4704 21.2372L16.2387 19.8285C15.852 19.6627 15.3824 19.8008 15.1338 20.1047L13.808 21.7067C11.7088 20.7124 10.0239 19.0275 9.02951 16.9282L10.6316 15.6024Z"
                            fill="#1F1F1F"
                          />
                        </svg>
                      </span>
                      <div>
                        <h5 className="mb-1 fw-semibold fs-20">
                          +25 (259) 214893-23
                        </h5>
                        <span>For Any Question</span>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex align-items-center cr-tab-counter mt-40 flex-wrap flex-sm-nowrap">
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <span className="counter">25</span>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Years on the market
                      </h6>
                    </div>
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <span className="counter">375</span>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Projects delivered so far
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning className="tab-pane fade" id="vission">
            <div className="row g-5">
              <div className="col-xl-6">
                <div className="img-left">
                  <Image
                    src="/assets/images/home-2/ab-1.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                    width={940}
                    height={750}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tab-content-right mx-532">
                  <span className="cr-subtitle position-relative primary-text-color fw-semibold">
                    More About Our Company
                  </span>
                  <h3 className="mb-32 mt-4">
                    We Build Software Solutions For Big Industries
                  </h3>
                  <p className="mb-5">
                    Cras facilisi fringilla nisi sed eget vel quis sollicitudin
                    sagittis. Hendrerit metus nost magna interdum cum habitant
                    sodales, sollicitudin tincidunt consequat lacinia
                    ullamcorper enim aptent
                  </p>
                  <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    <Link href="/about" className="template-btn primary-btn">
                      Learn More
                    </Link>
                    <a href="tel:25259214893" className="phone-btn">
                      <span className="icon">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4985 12.1221C14.0014 12.1774 13.6423 12.6469 13.6699 13.1717C13.7251 13.6689 14.1671 14.0556 14.7195 14.0004C15.2719 13.9451 15.8244 14.1109 16.2111 14.4975C16.6254 14.9119 16.7911 15.4643 16.7359 16.0167C16.6806 16.5692 17.0673 17.0111 17.5645 17.0663C17.8683 17.094 18.1446 16.9835 18.3379 16.7901C18.476 16.652 18.5865 16.431 18.6141 16.2377C18.7246 15.0776 18.3379 13.9727 17.5369 13.1717C16.7635 12.3983 15.6586 12.0116 14.4985 12.1221ZM14.1395 8.39323C13.587 8.44847 13.228 8.91803 13.2832 9.41522C13.3108 9.94003 13.7804 10.2991 14.3052 10.2715C16.0177 10.1058 17.6474 10.6858 18.8351 11.8735C19.9952 13.0336 20.6029 14.6909 20.4371 16.4034C20.3819 16.9006 20.741 17.3702 21.2658 17.3978C21.5696 17.4254 21.8182 17.3425 22.0116 17.1492C22.1773 16.9835 22.2601 16.7901 22.3154 16.5692C22.564 14.3318 21.7906 12.1221 20.1885 10.5201C18.5865 8.91803 16.4044 8.17226 14.1395 8.39323ZM13.7804 4.66435C13.2556 4.69197 12.8965 5.16153 12.9241 5.68634C12.9794 6.18352 13.4213 6.57022 13.9461 6.5426C16.7635 6.26638 19.5256 7.20551 21.5144 9.19425C23.4755 11.1554 24.4422 13.9451 24.166 16.7625C24.1384 17.2873 24.5251 17.7292 25.0223 17.7845C25.3261 17.8121 25.6023 17.7016 25.7957 17.5083C25.9338 17.3702 26.0167 17.1768 26.0443 16.9282C26.4033 13.586 25.2433 10.2715 22.8402 7.86842C20.4095 5.43774 17.1502 4.33289 13.7804 4.66435ZM10.6316 15.6024C10.9354 15.3538 11.0735 14.8842 10.9078 14.4975L9.49908 11.2659C9.33335 10.8239 8.83617 10.6029 8.42184 10.6858L5.3835 11.404C4.96918 11.4868 4.66534 11.9011 4.66534 12.3431C4.66534 19.9113 10.8249 26.0709 18.3932 26.0709C18.8351 26.0709 19.2494 25.7671 19.3323 25.3527L20.0504 22.3144C20.1333 21.9001 19.9123 21.4029 19.4704 21.2372L16.2387 19.8285C15.852 19.6627 15.3824 19.8008 15.1338 20.1047L13.808 21.7067C11.7088 20.7124 10.0239 19.0275 9.02951 16.9282L10.6316 15.6024Z"
                            fill="#1F1F1F"
                          />
                        </svg>
                      </span>
                      <div>
                        <h5 className="mb-1 fw-semibold fs-20">
                          +25 (259) 214893-23
                        </h5>
                        <span>For Any Question</span>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex align-items-center cr-tab-counter mt-40 flex-wrap flex-sm-nowrap">
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <span className="counter">25</span>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Years on the market
                      </h6>
                    </div>
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <span className="counter">375</span>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Projects delivered so far
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div suppressHydrationWarning className="tab-pane fade" id="goal">
            <div className="row g-5">
              <div className="col-xl-6">
                <div className="img-left">
                  <Image
                    src="/assets/images/home-2/ab-1.jpg"
                    alt="not found"
                    className="img-fluid rounded-4"
                    width={940}
                    height={750}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tab-content-right mx-532">
                  <span className="cr-subtitle position-relative primary-text-color fw-semibold">
                    More About Our Company
                  </span>
                  <h3 className="mb-32 mt-4">
                    We Build Software Solutions For Big Industries
                  </h3>
                  <p className="mb-5">
                    Cras facilisi fringilla nisi sed eget vel quis sollicitudin
                    sagittis. Hendrerit metus nost magna interdum cum habitant
                    sodales, sollicitudin tincidunt consequat lacinia
                    ullamcorper enim aptent
                  </p>
                  <div className="d-flex align-items-center gap-4 flex-wrap flex-sm-nowrap">
                    <Link href="/about" className="template-btn primary-btn">
                      Learn More
                    </Link>
                    <a href="tel:25259214893" className="phone-btn">
                      <span className="icon">
                        <svg
                          width="30"
                          height="31"
                          viewBox="0 0 30 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4985 12.1221C14.0014 12.1774 13.6423 12.6469 13.6699 13.1717C13.7251 13.6689 14.1671 14.0556 14.7195 14.0004C15.2719 13.9451 15.8244 14.1109 16.2111 14.4975C16.6254 14.9119 16.7911 15.4643 16.7359 16.0167C16.6806 16.5692 17.0673 17.0111 17.5645 17.0663C17.8683 17.094 18.1446 16.9835 18.3379 16.7901C18.476 16.652 18.5865 16.431 18.6141 16.2377C18.7246 15.0776 18.3379 13.9727 17.5369 13.1717C16.7635 12.3983 15.6586 12.0116 14.4985 12.1221ZM14.1395 8.39323C13.587 8.44847 13.228 8.91803 13.2832 9.41522C13.3108 9.94003 13.7804 10.2991 14.3052 10.2715C16.0177 10.1058 17.6474 10.6858 18.8351 11.8735C19.9952 13.0336 20.6029 14.6909 20.4371 16.4034C20.3819 16.9006 20.741 17.3702 21.2658 17.3978C21.5696 17.4254 21.8182 17.3425 22.0116 17.1492C22.1773 16.9835 22.2601 16.7901 22.3154 16.5692C22.564 14.3318 21.7906 12.1221 20.1885 10.5201C18.5865 8.91803 16.4044 8.17226 14.1395 8.39323ZM13.7804 4.66435C13.2556 4.69197 12.8965 5.16153 12.9241 5.68634C12.9794 6.18352 13.4213 6.57022 13.9461 6.5426C16.7635 6.26638 19.5256 7.20551 21.5144 9.19425C23.4755 11.1554 24.4422 13.9451 24.166 16.7625C24.1384 17.2873 24.5251 17.7292 25.0223 17.7845C25.3261 17.8121 25.6023 17.7016 25.7957 17.5083C25.9338 17.3702 26.0167 17.1768 26.0443 16.9282C26.4033 13.586 25.2433 10.2715 22.8402 7.86842C20.4095 5.43774 17.1502 4.33289 13.7804 4.66435ZM10.6316 15.6024C10.9354 15.3538 11.0735 14.8842 10.9078 14.4975L9.49908 11.2659C9.33335 10.8239 8.83617 10.6029 8.42184 10.6858L5.3835 11.404C4.96918 11.4868 4.66534 11.9011 4.66534 12.3431C4.66534 19.9113 10.8249 26.0709 18.3932 26.0709C18.8351 26.0709 19.2494 25.7671 19.3323 25.3527L20.0504 22.3144C20.1333 21.9001 19.9123 21.4029 19.4704 21.2372L16.2387 19.8285C15.852 19.6627 15.3824 19.8008 15.1338 20.1047L13.808 21.7067C11.7088 20.7124 10.0239 19.0275 9.02951 16.9282L10.6316 15.6024Z"
                            fill="#1F1F1F"
                          />
                        </svg>
                      </span>
                      <div>
                        <h5 className="mb-1 fw-semibold fs-20">
                          +25 (259) 214893-23
                        </h5>
                        <span>For Any Question</span>
                      </div>
                    </a>
                  </div>
                  <div className="d-flex align-items-center cr-tab-counter mt-40 flex-wrap flex-sm-nowrap">
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <span className="counter">25</span>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Years on the market
                      </h6>
                    </div>
                    <div className="cr-tab-counter-single">
                      <h3 className="fw-semibold primary-text-color mb-0">
                        <span className="counter">375</span>
                        <span>+</span>
                      </h3>
                      <h6 className="fw-medium mb-0 fs-20">
                        Projects delivered so far
                      </h6>
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

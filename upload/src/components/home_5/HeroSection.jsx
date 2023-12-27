"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

export default function HeroSection() {
  // get active section from global state
  const activeSection = useSelector((state) => state.global.home_five_active_section);

  return (
    <section className={`main-content-wrapper hm5-box banner_box ${activeSection === 'banner-box' && 'active'}`} id="banner-box">
      <div className="hm5-banner-section">
        <div className="container-1660">
          <div className="row g-5 align-items-center">
            <div className="col-xxl-4 col-xl-6">
              <div className="hm5-author-card">
                <div className="thumbnail text-center">
                  <Image src="/assets/images/home-5/author.png" alt="author" className="img-fluid" width={720} height={700} />
                </div>
                <div className="text-center mt-32">
                  <a href="mailto:hello@crete.design"><h6 className="text-white mb-0 fw-semibold">hello@crete.design</h6></a>
                  <h6 className="text-white mb-0 fw-semibold">Based in Frankfurt, DE</h6>
                </div>
                <div className="mt-40 hm5-author-socials d-flex align-items-center gap-3 justify-content-center">
                  <Link href="/"><i className="fab fa-facebook-f"></i></Link>
                  <Link href="/"><i className="fab fa-twitter"></i></Link>
                  <Link href="/"><i className="fab fa-linkedin"></i></Link>
                  <Link href="/"><i className="fab fa-skype"></i></Link>
                </div>
                <p className="mb-0 text-center mt-50">© 2023 Crete. All Rights Reserved</p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-6">
              <div className="hm5-author-right mt-32 mt-xl-0">
                <span suppressHydrationWarning className="hm5-subtitle primary-text-color fw-semibold wow fadeInUp d-block" data-wow-delay="0.1s">Hello! I am Mason William</span>
                <h1 className="mb-40 mt-32 text-white">Sr.
                  <Typewriter
                    options={{
                      strings: ['UI/UX Designer', 'Web Developer', 'SEO Specialist'],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: 'typer text-white'
                    }}
                  />
                </h1>

                <p className="mb-50 fw-medium">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products.</p>
                <div className="d-flex align-items-center hm5-authors-btn flex-wrap">
                  <button className="template-btn primary-btn">Download My CV</button>
                  <Link href="/appointment" className="template-btn secondary-btn">Hire Me Now</Link>
                </div>
                <div className="hm5-counter-box">
                  <div className="row g-5 mt-5">
                    <div className="col-sm-6">
                      <div className="hm4-counter-column hm5-counter-column d-flex align-items-center flex-wrap flex-xxl-nowrap gap-4">
                        <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle shadow-none">
                          <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 2.16186C24.0795 2.91007 30 9.27808 30 17.0216V18.515H16.5V27.4756C16.5 28.2678 16.8161 29.0275 17.3787 29.5876C17.9413 30.1478 18.7044 30.4625 19.5 30.4625C20.2956 30.4625 21.0587 30.1478 21.6213 29.5876C22.1839 29.0275 22.5 28.2678 22.5 27.4756V25.9822H25.5V27.4756C25.5 29.0599 24.8679 30.5794 23.7426 31.6997C22.6174 32.82 21.0913 33.4494 19.5 33.4494C17.9087 33.4494 16.3826 32.82 15.2574 31.6997C14.1321 30.5794 13.5 29.0599 13.5 27.4756V18.515H0V17.0216C0 9.27808 5.9205 2.91007 13.5 2.16186V2.08719C13.5 1.6911 13.658 1.31124 13.9393 1.03117C14.2206 0.751094 14.6022 0.59375 15 0.59375C15.3978 0.59375 15.7794 0.751094 16.0607 1.03117C16.342 1.31124 16.5 1.6911 16.5 2.08719V2.16186ZM26.907 15.5281C26.541 12.6411 25.1294 9.98638 22.9371 8.06194C20.7449 6.13751 17.9227 5.07567 15 5.07567C12.0773 5.07567 9.2551 6.13751 7.06286 8.06194C4.87062 9.98638 3.45905 12.6411 3.093 15.5281H26.907Z" fill="white"></path>
                          </svg>
                        </span>
                        <div>
                          <h4 className="mb-3 text-white">
                            <CountUp end={7685} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                          </h4>
                          <span className="fs-sm text text-uppercase">Project Completed Worldwide</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="hm4-counter-column hm5-counter-column d-flex align-items-center flex-wrap flex-xxl-nowrap gap-4">
                        <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle shadow-none">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30ZM15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76515 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3C11.8174 3 8.76515 4.26428 6.51472 6.51472C4.26428 8.76515 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76515 25.7357 11.8174 27 15 27ZM9.75 18H18C18.1989 18 18.3897 17.921 18.5303 17.7803C18.671 17.6397 18.75 17.4489 18.75 17.25C18.75 17.0511 18.671 16.8603 18.5303 16.7197C18.3897 16.579 18.1989 16.5 18 16.5H12C11.0054 16.5 10.0516 16.1049 9.34835 15.4017C8.64509 14.6984 8.25 13.7446 8.25 12.75C8.25 11.7554 8.64509 10.8016 9.34835 10.0983C10.0516 9.39509 11.0054 9 12 9H13.5V6H16.5V9H20.25V12H12C11.8011 12 11.6103 12.079 11.4697 12.2197C11.329 12.3603 11.25 12.5511 11.25 12.75C11.25 12.9489 11.329 13.1397 11.4697 13.2803C11.6103 13.421 11.8011 13.5 12 13.5H18C18.9946 13.5 19.9484 13.8951 20.6516 14.5983C21.3549 15.3016 21.75 16.2554 21.75 17.25C21.75 18.2446 21.3549 19.1984 20.6516 19.9016C19.9484 20.6049 18.9946 21 18 21H16.5V24H13.5V21H9.75V18Z" fill="white" />
                          </svg>
                        </span>
                        <div>
                          <h4 className="mb-3 text-white">
                            <CountUp end={1259} redraw={true}>
                              {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                  <span ref={countUpRef} />
                                </VisibilitySensor>
                              )}
                            </CountUp>
                            <span>+</span></h4>
                          <span className="fs-sm text-uppercase text">Reached Million <span className="text-white">($)</span> Valuation</span>
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
  )
}
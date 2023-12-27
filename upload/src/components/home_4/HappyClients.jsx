"use client"
import React from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
export default function HappyClients() {
  return (
    <div className="pt-100">
      <div className="row align-items-center g-5">
        <div className="col-xl-5">
          <div className="hm4-telbox d-flex align-items-center flex-wrap flex-xxl-nowrap gap-4">
            <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white flex-shrink-0">
              <i className="fas fa-phone"></i>
            </span>
            <div>
              <a href="tel:25425684"><h5>+(25) 1258 36 3215</h5></a>
              <span className="fs-sm fw-bold text-white text-uppercase">Call Me Directly Anytime</span>
            </div>
          </div>
        </div>
        <div className="col-xl-7">
          <div className="ps-xxl-100">
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 col-sm-4">
                <div className="hm4-counter-column text-center text-xl-start">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 31.4542C0 28.3358 1.26428 25.3452 3.51472 23.1401C5.76516 20.9351 8.8174 19.6964 12 19.6964C15.1826 19.6964 18.2348 20.9351 20.4853 23.1401C22.7357 25.3452 24 28.3358 24 31.4542H21C21 29.1154 20.0518 26.8724 18.364 25.2187C16.6761 23.5649 14.3869 22.6358 12 22.6358C9.61305 22.6358 7.32387 23.5649 5.63604 25.2187C3.94821 26.8724 3 29.1154 3 31.4542H0ZM12 18.2266C7.0275 18.2266 3 14.2804 3 9.40823C3 4.53607 7.0275 0.589844 12 0.589844C16.9725 0.589844 21 4.53607 21 9.40823C21 14.2804 16.9725 18.2266 12 18.2266ZM12 15.2872C15.315 15.2872 18 12.6563 18 9.40823C18 6.16012 15.315 3.52931 12 3.52931C8.685 3.52931 6 6.16012 6 9.40823C6 12.6563 8.685 15.2872 12 15.2872Z" fill="white" />
                    </svg>
                  </span>
                  <h4 className="mb-3 mt-4 text-white">
                    <CountUp end={25258} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h4>
                  <span className="fs-sm text-white text-uppercase">Happy Client's in 25 Years</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-4">
                <div className="hm4-counter-column text-center text-xl-start">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5 2.16186C24.0795 2.91007 30 9.27808 30 17.0216V18.515H16.5V27.4756C16.5 28.2678 16.8161 29.0275 17.3787 29.5876C17.9413 30.1478 18.7044 30.4625 19.5 30.4625C20.2956 30.4625 21.0587 30.1478 21.6213 29.5876C22.1839 29.0275 22.5 28.2678 22.5 27.4756V25.9822H25.5V27.4756C25.5 29.0599 24.8679 30.5794 23.7426 31.6997C22.6174 32.82 21.0913 33.4494 19.5 33.4494C17.9087 33.4494 16.3826 32.82 15.2574 31.6997C14.1321 30.5794 13.5 29.0599 13.5 27.4756V18.515H0V17.0216C0 9.27808 5.9205 2.91007 13.5 2.16186V2.08719C13.5 1.6911 13.658 1.31124 13.9393 1.03117C14.2206 0.751094 14.6022 0.59375 15 0.59375C15.3978 0.59375 15.7794 0.751094 16.0607 1.03117C16.342 1.31124 16.5 1.6911 16.5 2.08719V2.16186ZM26.907 15.5281C26.541 12.6411 25.1294 9.98638 22.9371 8.06194C20.7449 6.13751 17.9227 5.07567 15 5.07567C12.0773 5.07567 9.2551 6.13751 7.06286 8.06194C4.87062 9.98638 3.45905 12.6411 3.093 15.5281H26.907Z" fill="white" />
                    </svg>
                  </span>
                  <h4 className="mb-3 mt-4 text-white">
                    <CountUp end={7965} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </h4>
                  <span className="fs-sm text-white text-uppercase">Happy Client's in 25 Years</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-4">
                <div className="hm4-counter-column text-center text-xl-start">
                  <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle">
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 30.4586C6.7155 30.4586 0 23.7725 0 15.5242C0 7.27596 6.7155 0.589844 15 0.589844C23.2845 0.589844 30 7.27596 30 15.5242C30 23.7725 23.2845 30.4586 15 30.4586ZM15 27.4717C18.1826 27.4717 21.2348 26.213 23.4853 23.9724C25.7357 21.7318 27 18.6929 27 15.5242C27 12.3555 25.7357 9.31665 23.4853 7.07606C21.2348 4.83547 18.1826 3.57672 15 3.57672C11.8174 3.57672 8.76515 4.83547 6.51472 7.07606C4.26428 9.31665 3 12.3555 3 15.5242C3 18.6929 4.26428 21.7318 6.51472 23.9724C8.76515 26.213 11.8174 27.4717 15 27.4717ZM9.75 18.5111H18C18.1989 18.5111 18.3897 18.4324 18.5303 18.2924C18.671 18.1523 18.75 17.9624 18.75 17.7644C18.75 17.5663 18.671 17.3764 18.5303 17.2364C18.3897 17.0963 18.1989 17.0176 18 17.0176H12C11.0054 17.0176 10.0516 16.6243 9.34835 15.9241C8.64509 15.2239 8.25 14.2743 8.25 13.2841C8.25 12.2938 8.64509 11.3442 9.34835 10.644C10.0516 9.94382 11.0054 9.55046 12 9.55046H13.5V6.56359H16.5V9.55046H20.25V12.5373H12C11.8011 12.5373 11.6103 12.616 11.4697 12.756C11.329 12.8961 11.25 13.086 11.25 13.2841C11.25 13.4821 11.329 13.672 11.4697 13.8121C11.6103 13.9521 11.8011 14.0308 12 14.0308H18C18.9946 14.0308 19.9484 14.4241 20.6516 15.1243C21.3549 15.8245 21.75 16.7742 21.75 17.7644C21.75 18.7546 21.3549 19.7042 20.6516 20.4044C19.9484 21.1046 18.9946 21.498 18 21.498H16.5V24.4848H13.5V21.498H9.75V18.5111Z" fill="white" />
                    </svg>
                  </span>
                  <h4 className="mb-3 mt-4 text-white">
                    <CountUp end={1265} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    +</h4>
                  <span className="fs-sm text-white text-uppercase">Happy Client's in 25 Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
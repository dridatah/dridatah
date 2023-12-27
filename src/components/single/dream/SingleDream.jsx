"use client"
import Image from 'next/image'
import React from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

export default function SingleDream({ wrapperClass, countNumber, icon, des }) {
  return (
    <div suppressHydrationWarning className={`cr-counter-column text-center wow fadeInUp ${wrapperClass}`}>
      <span className="icon-wrapper d-inline-flex align-items-center justify-content-center">
        <Image src={icon} alt="icon" width={60} height={60} />
      </span>
      <div className="cr-counter-circle">
        <h2 className="mb-3">
          <CountUp end={countNumber} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          +</h2>
        <p className="mb-0">{des}</p>
      </div>
    </div>
  )
}
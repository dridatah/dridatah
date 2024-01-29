"use client"
import React from 'react'

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="loader">
        <svg
          className="pl"
          viewBox="0 0 128 128"
          width="128px"
          height="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            strokeLinecap="round"
            strokeWidth="16"
            transform="rotate(-90,64,64)"
          >
            <circle className="pl__ring" r="56" cx="64" cy="64" stroke="#ddd" />
            <circle
              className="pl__worm pl__worm--moving"
              r="56"
              cx="64"
              cy="64"
              stroke="currentColor"
              strokeDasharray="22 307.86 22"
              data-worm
            />
          </g>
          <g data-particles></g>
        </svg>
      </div>
    </div>
  )
}
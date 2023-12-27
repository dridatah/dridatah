"use client"
import Image from 'next/image'
import React from 'react'

export default function GoogleMapSection() {
  return (
    <div className="hm3-google-map position-relative z-1">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.227684015649!2d-2.2353612228296296!3d53.48226152232902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1bebb5c3441%3A0xda5a4bbb643f40b3!2smaxitaxi!5e0!3m2!1sen!2sbd!4v1687151167197!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen="" loading="lazy" ></iframe>
      <span className="logo-icon">
        <Image
          src="/assets/images/logo-icon.png"
          alt="icon"
          width={100}
          height={100}
        /></span>
    </div>
  )
}
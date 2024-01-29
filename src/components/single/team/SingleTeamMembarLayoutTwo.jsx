"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SingleTeamMembarLayoutTwo({ name, designation, link, thumbnail }) {
  return (
    <div className="team-card">
      <div className="feature-image rounded-4 overflow-hidden">
        <Image src={thumbnail} alt="team" className="img-fluid" width={611} height={676} />
      </div>
      <div className="team-card-content">
        <div className="team-info">
          <Link href={link}><h6 className="mb-1">{name}</h6></Link>
          <span className="primary-text-color">{designation}</span>
        </div>
        <span className="spacer"></span>
        <div className="social-info">
          <Link href="/"> <i className="fab fa-facebook-f"></i></Link>
          <Link href="/"> <i className="fab fa-twitter"></i></Link>
          <Link href="/"> <i className="fab fa-instagram"></i></Link>
        </div>
      </div>
    </div>
  )
}
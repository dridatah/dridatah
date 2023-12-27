"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SingleTeamMembarLayoutOne({ name, designation, avatar, link }) {
  return (
    <div className="hm2-team-single text-center">
      <div className="thumbnail">
        <Image src={avatar} className="rounded-circle img-fluid" alt="team" width={406} height={405} />
      </div>
      <Link href={link} ><h6 className="mt-40 mb-2">{name}</h6></Link>
      <span className="fw-medium">{designation}</span>
    </div>
  )
}
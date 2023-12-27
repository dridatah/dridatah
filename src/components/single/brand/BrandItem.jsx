"use client"
import Image from 'next/image'
import React from 'react'

export default function BrandItem({ title, logo, percent, wrapper_class, theme }) {
  return (
    <div className={`hm3-brand-item ${wrapper_class}`}>
      <p className="mb-0">{title}</p>
      <span className={`icon d-inline-flex align-items-center justify-content-center rounded-circle ${theme === 'white' && 'bg-white'}`}>
        <Image src={logo} alt="slack" className="img-fluid" width={80} height={80} />
      </span>
      <h6 className={`${theme === 'white' && 'text-white'} fs-30 mb-0`}>{percent}</h6>
    </div>

  )
}
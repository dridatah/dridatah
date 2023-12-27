"use client"
import React from 'react'

export default function IconBox({ title, subtitle, iconClass, }) {
  return (
    <div className="col-md-6">
      <div className="td-icon-box d-flex align-items-center flex-wrap flex-xxl-nowrap">
        <span className="icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle bg-white theme-shadow">
          <i className={iconClass}></i>
        </span>
        <div>
          <span>{subtitle}</span>
          <h6 className="mb-0 mt-1 fs-18">{title}</h6>
        </div>
      </div>
    </div>
  )
}
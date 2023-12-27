"use client"
import React from 'react'

export default function SearchBox() {
  return (
    <div className="sidebar-widget search-widget">
      <form className="d-flex align-items-center gap-0">
        <input type="text" placeholder="Enter Keyword" />
        <button type="submit" className="submit-btn template-btn primary-btn"><i className="fas fa-magnifying-glass"></i></button>
      </form>
    </div>
  )
}
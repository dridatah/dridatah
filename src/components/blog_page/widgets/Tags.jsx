"use client"
import Link from 'next/link'
import React from 'react'

export default function Tags() {
  return (
    <div className="sidebar-widget tags-widget mt-32">
      <h6 className="widget-title mb-32">Popular Tags</h6>
      <div className="tags-list">
        <Link href="/">Techynology</Link>
        <Link href="/">Repair</Link>
        <Link href="/">Services</Link>
        <Link href="/">Design</Link>
        <Link href="/">Engine</Link>
        <Link href="/">Tips</Link>
        <Link href="/">Fora</Link>
        <Link href="/">Speed</Link>
        <Link href="/">Solution</Link>
        <Link href="/">Car Repair</Link>
      </div>
    </div>
  )
}
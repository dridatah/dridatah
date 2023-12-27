import Link from 'next/link'
import React from 'react'

export default function HeaderNavbar() {
  return (
    <nav className="crete-navmenu text-center ps-xl-5">
      <ul>
        <li className="has-submenu">
          <Link href="/">Home</Link>
          <ul className="submenu-wrapper">
            <li><Link href="/">Home 1</Link></li>
            <li><Link href="/home-2">Home 2</Link></li>
            <li><Link href="/home-3">Home 3</Link></li>
            <li><Link href="/home-4">Home 4</Link></li>
            <li><Link href="/home-5">Home 5</Link></li>
          </ul>
        </li>
        <li><Link href="/about">About</Link></li>
        <li className="has-submenu">
          <Link href="/project">Project</Link>
          <ul className="submenu-wrapper">
            <li><Link href="/project">Projects</Link></li>
            <li>
              <Link href="/project/details">Project Details</Link>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <Link href="/">Pages</Link>
          <ul className="submenu-wrapper">
            <li><Link href="/service">Services</Link></li>
            <li>
              <Link href="/service/details">Service Details</Link>
            </li>
            <li><Link href="/team">Our Team</Link></li>
            <li><Link href="/team/details">Team Details</Link></li>
            <li><Link href="/appointment">appointment</Link></li>
            <li><Link href="/faq">Faq</Link></li>
          </ul>
        </li>
        <li className="has-submenu">
          <Link href="/blog">Blog</Link>
          <ul className="submenu-wrapper">
            <li><Link href="/blog">Blog List</Link></li>
            <li><Link href="/blog/single">Blog Details</Link></li>
          </ul>
        </li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

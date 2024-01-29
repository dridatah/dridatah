"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleHomeThreeCanvasMenu } from '@/rtk/features/global/globalSlice';


export default function HeaderTwo() {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();


  // Function toggle menu
  const handleToogleCanvasMenu = () => {
    dispatch(toggleHomeThreeCanvasMenu())
  }

  //Function to handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollbarPosition = window.scrollY;

      if (scrollbarPosition > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header-style-3 position-relative z-2 header-sticky ${isSticky && 'sticky-on'}`}>
      <div className="container">
        <div className="row justify-content-between align-items-center g-4">
          <div className="col-xl-3 col-5">
            <div className="logo-wrapper">
              <Link href="/"
              >
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  className="img-fluid"
                  width={157}
                  height={44}
                />
              </Link>
            </div>
          </div>
          <div className="col-xl-3 col-7">
            <div className="hm3-header-right d-flex align-items-center justify-content-end gap-4">
              <a href="tel:98484843" className="header-tel d-none d-sm-inline-block">+256 (258) 23 62589</a>
              <button className="canvus-menu-toggle" onClick={handleToogleCanvasMenu}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
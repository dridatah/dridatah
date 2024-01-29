"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { toggleHomeThreeCanvasMenu } from '@/rtk/features/global/globalSlice'

export default function HeaderThree() {
  const [isSticky, setIsSticky] = useState(false);
  const dispatch = useDispatch();

  // Handle toggle menu
  const handleToogleCanvasMenu = () => {
    dispatch(toggleHomeThreeCanvasMenu())
  }

  // Handle sticky header
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
    <header className={`hm4-header-section d-md-none header-sticky ${isSticky && 'sticky-on'}`}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <div className="logo">
              <Link href="/"><Image src="/assets/images/logo.png" alt="logo" width={157} height={44} /></Link>
            </div>
          </div>
          <div className="col-6">
            <div className="header-right text-end">
              <button onClick={handleToogleCanvasMenu} className="hm4-header-toggle"><i className="fas fa-bars"></i></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
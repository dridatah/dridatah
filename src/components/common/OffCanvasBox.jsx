"use client"
import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleOffCanvas } from '@/rtk/features/global/globalSlice';
import Link from 'next/link';
import Image from 'next/image';

export default function OffCanvasBox() {
  const dispatch = useDispatch();
  const isOpenCanvas = useSelector((state) => state.global.offCanvasOpen);
  const offCanvasRef = useRef(null);


  // Effect to hide sidebar if clicked outside the sidebar area
  useEffect(() => {
    const handleMouseUp = (event) => {
      const offCanvasMenu = offCanvasRef.current;

      if (!offCanvasMenu.contains(event.target)) {
        offCanvasMenu.classList.remove('active');
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Function to toggle the off-canvas sidebar
  const handleToggleOffCanvas = () => {
    dispatch(toggleOffCanvas());
  };
  return (
    <div ref={offCanvasRef} className={`offcanvus-box position-fixed bg-white ${isOpenCanvas && 'active'}`}>
      <button onClick={handleToggleOffCanvas} className="offcanvus-close"
      ><i className="fa-solid fa-xmark"></i></button>
      <div className="content-top">
        <Link href="/" className="offcanvus-logo"
        ><Image src="/assets/images/logo.png" alt="logo" width={160} height={45} /></Link>
        <p className="mb-0 mt-32 fw-light">
          Distrak Street 2SK Line, Germanygalore@inside-support.com (+125)
          2156-2145
        </p>
      </div>
      <div className="offcanvus-gallery d-flex align-items-center flex-wrap">
        <Link href="/"
        ><Image src="/assets/images/gallery/1.jpg" width={110} height={100} alt="not found"
          /></Link>
        <Link href="/"
        ><Image src="/assets/images/gallery/2.jpg" width={110} height={100} alt="not found"
          /></Link>
        <Link href="/"
        ><Image src="/assets/images/gallery/3.jpg" width={110} height={100} alt="not found"
          /></Link>
        <Link href="/"
        ><Image src="/assets/images/gallery/4.jpg" width={110} height={100} alt="not found"
          /></Link>
        <Link href="/"
        ><Image src="/assets/images/gallery/5.jpg" width={110} height={100} alt="not found"
          /></Link>
        <Link href="/"
        ><Image src="/assets/images/gallery/6.jpg" width={110} height={100} alt="not found"
          /></Link>
      </div>
      <div className="offcanvus-newsletter">
        <h6 className="mb-4 text-center">Newsletter</h6>
        <form action="#">
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="theme-input"
          />
          <button type="submit" className="template-btn primary-btn mt-3 w-100">
            <span>SUBSCRIBE NOW</span>
          </button>
        </form>
      </div>
      <div
        className="offcanvus-bottom d-flex align-items-center justify-content-between"
      >
        <div className="language-switcher">
          <div className="dropdown">
            <button type="button" data-bs-toggle="dropdown">
              <Image src="/assets/images/icons/flag-usa.png"
                width={30} height={15} alt="flag" />English
              <span><i className="fas fa-angle-down"></i></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#"
                ><Image
                    src="/assets/images/icons/flag-bd.jpg"
                    width={30} height={15}
                    alt="flag"
                  />Bangla</a>
              </li>
              <li>
                <a href="#"
                ><Image
                    src="/assets/images/icons/flag-india.jpg"
                    width={30} height={15}
                    alt="flag"
                  />Hindi</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="user-links">
          <Link href="/contact" className="text-uppercase fw-bold fs-sm"
          >Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
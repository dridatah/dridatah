// Importing necessary modules and components
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import HeaderNavbar from "../navbar/HeaderNavbar";
import NiceSelect from "@/plugins/niceSelect/NiceSelect";
import {
  toggleMobileMenu,
  toggleOffCanvas,
} from "@/rtk/features/global/globalSlice";

/**
 * Header Component
 * @param {string} props.select_color - The color theme for the language switcher ('light' or 'dark')
 * @param {string} props.social_menu_color - The color theme for the social media menu ('light' or 'dark')
 * @param {number} props.layout - The layout style for the header (1 or 2)
 */

export default function Header({
  layout,
  select_color = "dark",
  social_menu_color = "dark",
}) {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  // Handle sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollbarPosition = window.scrollY;

      // Check if scrollbar position is greater than 150 to set sticky state
      if (scrollbarPosition > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // language options
  const options = ["English", "Bangla", "Hindi", "Arabic"];

  // Handle select change event
  const handleSelectChange = (selectedValue) => {
    console.log(selectedValue);
  };

  // Return the JSX content for the Header component
  return (
    <header
      className={`header-section position-relative z-2 header-sticky ${
        layout === 2 && "header-style-2"
      }  ${isSticky && "sticky-on"}`}
    >
      <div className="container">
        {/* Infobar section */}
        <div className="infobar py-2 d-none d-lg-block">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-xl-6 col-lg-7">
              {/* Infobar content */}
              <div className="infobar-content d-flex align-items-center">
                <a
                  href="tel:1044123456789"
                  className={`mb-0 fs-sm fw-semibold ${
                    layout === 1 && "text-white"
                  }`}
                >
                  <span className="me-2">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  +91 9080 617 982
                </a>
                {/* <p className={`fs-sm mb-0 fw-semibold ${layout === 1 && 'text-white'}`}>
                  <span className="me-2"><i className="fa-solid fa-location-dot"></i></span>
                  27 Divi ST, Berlin, Germany
                </p> */}
                <a
                  href="mailto:info@dridatah.com"
                  className={`fs-sm fw-semibold ${
                    layout === 1 && "text-white"
                  }`}
                >
                  <span className="me-2">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  info@dridatah.com
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              {/* Infobar right section */}
              <div
                className={`d-flex align-items-center justify-content-end gap-5 infobar-right ${
                  select_color === "dark" && "info-small-white"
                }`}
              >
                <div
                  className={`language-switcher ${
                    select_color === "light" &&
                    "bg-transparent list-headings-color"
                  }`}
                >
                  {/* <NiceSelect
                    options={options}
                    defaultValue={options[0]}
                    onChange={handleSelectChange}
                    wrapperClass={`${
                      select_color === "light" && "text-white"
                    } nice_select`}
                  /> */}
                </div>
                <div
                  className={`info-social  ${
                    social_menu_color === "light" && "header-icons-white"
                  }`}
                >
                  {/* Social menu */}
                  <Link href="https://www.facebook.com/dridatah" target="blank">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/13283941"
                    target="blank"
                  >
                    <i className="fab fa-linkedin"></i>
                  </Link>
                  {/* <Link href="/">
                    <i className="fab fa-twitter"></i>
                  </Link> */}
                  <Link
                    href="https://www.instagram.com/dridatah/"
                    target="blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>

                  {/* <Link href="/">
                    <i className="fab fa-behance"></i>
                  </Link> */}
                  {/* <Link href="/">
                    <i className="fab fa-youtube"></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar section */}
        <div className="crete-navbar bg-white">
          <div className="row align-items-center">
            <div className="col-lg-2 col-6">
              <div className="logo-wrapper">
                {/* Logo */}
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    className="img-fluid"
                    width={157}
                    height={44}
                    key="asdasds"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-9 d-none d-lg-block">
              {/* HeaderNavbar component */}
              <HeaderNavbar />
            </div>
            <div className="col-xl-3 col-lg-1 col-6">
              <div className="text-end d-flex align-items-center justify-content-end header-right gap-3">
                {/* Contact Us link */}
                <Link
                  href="/contact"
                  className="template-btn primary-btn d-none d-sm-block d-lg-none d-xl-block"
                >
                  Contact Us
                </Link>
                {/* Offcanvas toggle button */}
                {/* <button
                  type="button"
                  onClick={() => dispatch(toggleOffCanvas())}
                  className="header-toggle offcanvus-toggle d-none d-lg-inline-flex"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button> */}
                {/* Mobile menu toggle button */}
                <button
                  type="button"
                  onClick={() => dispatch(toggleMobileMenu())}
                  className="header-toggle mobile-menu-toggle d-lg-none"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// Prop Types for the Header component
Header.propTypes = {
  select_color: PropTypes.oneOf(["light", "dark"]),
  social_menu_color: PropTypes.oneOf(["light", "dark"]),
  layout: PropTypes.oneOf([1, 2]).isRequired,
};

"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileMenu } from "@/rtk/features/global/globalSlice";
import menuData from "./mobileMenu.json";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = () => {
  const dispatch = useDispatch();
  const mobileMenuRef = useRef();
  const isMobileMenuOpen = useSelector((state) => state.global.mobileMenuOpen);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Function to handle submenu toggle
  const handleSubMenuToggle = (index) => {
    setActiveSubMenu((prevActiveSubMenu) =>
      prevActiveSubMenu === index ? null : index
    );
  };

  // Clicked outside the mobile menu, remove "active" class
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!mobileMenuRef.current.contains(e.target)) {
        document.querySelector(".mobile-menu").classList.remove("active");
      }
    };
    document.addEventListener("mouseup", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={mobileMenuRef}
      className={`mobile-menu ${isMobileMenuOpen && "active"}`}
    >
      <button onClick={() => dispatch(toggleMobileMenu())} className="close">
        <i className="fas fa-xmark"></i>
      </button>
      <Link href="/" className="logo">
        <Image
          src="/assets/images/logo-white.png"
          width={140}
          height={40}
          alt="logo"
          className="img-fluid"
        />
      </Link>
      <ul className="mobile-nav-menu">
        {menuData.map((menuItem, index) => (
          <li
            className={`has-submenu ${activeSubMenu === index && "active"}`}
            key={index}
          >
            <Link
              href={menuItem.link}
              onClick={(e) => {
                if ("submenu" in menuItem) {
                  e.preventDefault();
                }

                handleSubMenuToggle(index);
              }}
            >
              {menuItem.title}
            </Link>
            {menuItem.submenu && (
              <i
                className={`fas fa-angle-down ${
                  activeSubMenu === index && "icon-rotate"
                }`}
              ></i>
            )}
            {menuItem.submenu && (
              <ul
                className={`submenu-wrapper ${
                  activeSubMenu === index && "d-block"
                }`}
              >
                {menuItem.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href={subItem.link}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {/* <form className="mobile-search mt-5" action="#">
        <input type="text" placeholder="Search..." className="theme-input" />
        <button type="submit" className="template-btn primary-btn mt-3">
          <span>Go</span>
        </button>
      </form> */}
    </div>
  );
};

export default MobileMenu;

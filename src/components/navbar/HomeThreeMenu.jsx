"use client";
import { hideHomeThreeCanvasMenu } from "@/rtk/features/global/globalSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import SlideToggle from "react-slide-toggle";

export default function HomeThreeMenu() {
  // Get data from store
  const isHomeThreeMenuOpen = useSelector(
    (state) => state.global.homeThreeCanvasMenuOpen
  );
  const homeThreeMenuRef = useRef(null);
  const dispatch = useDispatch();

  // Close sidebar menu when click on menu
  const hidesidebarmenu = () => {
    dispatch(hideHomeThreeCanvasMenu());
  };

  return (
    <div
      ref={homeThreeMenuRef}
      className={`canvus-menu ${isHomeThreeMenuOpen && "active"}`}
    >
      <Link href="/" className="logo">
        <Image
          src="/assets/images/logo-white.png"
          alt="logo"
          width={145}
          height={45}
          className="img-fluid"
        />
      </Link>
      <ul className="canvus-nav-menu">
        <SlideToggle
          collapsed={true}
          duration={800}
          render={({ toggle, setCollapsibleElement }) => (
            <li className="has-submenu">
              <Link href="#" onClick={toggle}>
                01. Home
              </Link>
              <ul
                className="submenu-wrapper crn-has-submenu"
                ref={setCollapsibleElement}
              >
                <li>
                  <Link onClick={hidesidebarmenu} href="/">
                    Home One
                  </Link>
                </li>
                <li>
                  <Link onClick={hidesidebarmenu} href="/home-2">
                    Home Two
                  </Link>
                </li>
                <li>
                  <Link onClick={hidesidebarmenu} href="/home-3">
                    Home Three
                  </Link>
                </li>
                <li>
                  <Link onClick={hidesidebarmenu} href="/home-4">
                    Home Four
                  </Link>
                </li>
                <li>
                  <Link onClick={hidesidebarmenu} href="/home-5">
                    Home Five
                  </Link>
                </li>
              </ul>
            </li>
          )}
        />

        <li>
          {" "}
          <ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            02. About
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            03. Services
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            04. Projects
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            05. Contact
          </ScrollLink>
        </li>

        <SlideToggle
          collapsed={true}
          duration={800}
          render={({ toggle, setCollapsibleElement }) => (
            <li className="has-submenu" onClick={toggle}>
              <Link href="#">06. Blog</Link>
              <ul
                className="submenu-wrapper crn-has-submenu"
                ref={setCollapsibleElement}
              >
                <li>
                  <Link onClick={hidesidebarmenu} href="/blog">
                    Blog List
                  </Link>
                </li>
                <li>
                  <Link onClick={hidesidebarmenu} href="/blog/details">
                    Blog Single
                  </Link>
                </li>
              </ul>
            </li>
          )}
        />
      </ul>
      <div className="canvus-icon-box mt-5">
        <div className="single-icon">
          <Image
            src="/assets/images/icons/icon-7.svg"
            alt="icon"
            width={58}
            height={56}
            className="img-fluid"
          />
          <a href="tel:25676879">+256 (258) 62589</a>
        </div>
        <div className="single-icon">
          <Image
            src="/assets/images/icons/icon-8.svg"
            width={66}
            height={66}
            alt="icon"
            className="img-fluid"
          />
          <a href="mailto:info@dridatah.com">info@dridatah.com</a>
        </div>
      </div>
    </div>
  );
}

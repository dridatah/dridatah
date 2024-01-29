"use client";
import Link from "next/link";
import React from "react";

export default function FooterThree() {
  return (
    <footer className="hm4-copyright footer-copyright position-relative">
      <div className="container">
        <div className="row g-3">
          <div className="col-xl-6">
            <div className="copyright-text">
              <p className="mb-0 text-white">
                &copy;2023 Crete. All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="copyright-links justify-content-start justify-content-xl-end">
              {/* <Link href="/">Security</Link> */}
              <Link href="/">Privacy & Policy</Link>
              <Link href="/">Terms & Services</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

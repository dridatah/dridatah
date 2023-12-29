"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SingleServiceLayoutOne({
  wrapper_class,
  title,
  des,
  thumbnail,
  link,
  data_wow_delay = "0.1s",
}) {
  return (
    <div className={wrapper_class}>
      <div
        suppressHydrationWarning
        className="d-flex gap-4 service-card bg-white rounded-3 wow fadeInUp"
        data-wow-delay={data_wow_delay}
      >
        <span className="icon-wrapper flex-shrink-0">
          <Image
            src={thumbnail}
            alt="icon"
            width={68}
            height={80}
            className="img-fluid"
          />
        </span>
        <div>
          <h6 className="mb-4">{title}</h6>
          <p className="mb-32 fw-medium">{des}</p>
          <Link href={link} className="explore-btn">
            Learn more
            <span className="ms-2">
              <i className="fa-solid fa-arrow-right crn-icon-animate"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

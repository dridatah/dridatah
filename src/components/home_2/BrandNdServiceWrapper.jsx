"use client";
import React from "react";
import BrandSection from "./BrandSection";
// import ServiceSection from "../home_2/ServiceSection";
import ServiceSection from "@/components/home_1/ServiceSection";

export default function BrandNdServiceWrapper() {
  return (
    <section className="cr2-brand-n-service bg-light-white pt-100 position-relative z-1 overflow-hidden">
      <span className="circle-shape-1 rounded-circle position-absolute z--1"></span>
      <span className="circle-shape-2 rounded-circle position-absolute z--1"></span>
      <BrandSection />
      <ServiceSection />
    </section>
  );
}

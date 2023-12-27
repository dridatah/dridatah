"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IconBox from '../single/icon_box/IconBox'

export default function InnerAboutBox() {
  return (
    <div className="row g-5 align-items-center">
      <div className="col-xxl-5 col-xl-6">
        <div className="hm5-about-left">
          <Image src="/assets/images/home-5/ab-1.jpg" alt="not found" width={856} height={900} className="img-fluid" />
        </div>
      </div>
      <div className="col-xxl-7 col-xl-6">
        <div className="hm5-about-right">
          <h4 className="mb-4 text-white">Oliver William</h4>
          <span className="primary-text-color">Founder & CEO</span>
          <p className="fw-medium mb-60 mt-5">Continually utilize 24/365 bandwidth before real-time interfaces grow team core competencies with pandemic commerce. Objectively initiate pandemic users with deliver bricks clicks meta services for bricks and clicks innovation streamline front end aradigms expedite granular human capital rather than intuitive testing procedures</p>
          <div className="row g-4">
            <IconBox
              title={`More Than 10 Years`}
              subtitle={`Experience`}
              iconClass={`fa-solid fa-user`}
            />
            <IconBox
              title={`+(256) 21458-21456`}
              subtitle={`Phone`}
              iconClass={`fa-solid fa-phone`}
            />
            <IconBox
              title={`info@crete.com`}
              subtitle={`Email`}
              iconClass={`fa-regular fa-envelope`}
            />
            <IconBox
              title={`+2568145632`}
              subtitle={`Fax`}
              iconClass={`fa-solid fa-fax`}
            />
          </div>
          <div className="d-flex align-items-center gap-4 flex-wrap mt-60">
            <Link href="/appointment" className="template-btn primary-btn">Hire Me Now</Link>
            <button className="template-btn white-btn">Download Cv</button>
          </div>
        </div>
      </div>
    </div>
  )
}
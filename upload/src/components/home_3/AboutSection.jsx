"use client"
import React from 'react'
import BrandItem from '../single/brand/BrandItem'
import Slider from "react-slick";
import Link from 'next/link';
export default function AboutSection() {
  // Slider config 
  const settings = {
    className: "hm3-brand-slider mt-100",
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    speed: 700,
    rows: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  }

  return (
    <section className="hm3-about-section ptb-100 overflow-hidden" id="about">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <div className="hm3-about-left">
              <h2 suppressHydrationWarning className="text-white mb-4 wow fadeInUp">About My Story</h2>
              <p suppressHydrationWarning className="fs-20 fw-meidum text-white mb-40 wow fadeInUp" data-wow-delay="0.2s">My name is Adam Smith. I have been studying UI/UX Design since October 2020. I like creating a cool design project.</p>
              <p suppressHydrationWarning className="desc mb-40 wow fadeInUp" data-wow-delay="0.3s">Donec imperdiet risus or consequat maximus et eget magna ras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim euismod bibendum ultrices, fringilla vel eros. Donec euismod leo lectus  euismod metus euismod sed. Quisque quis suscipit ipsum</p>
              <Link href="/project" suppressHydrationWarning className="template-btn primary-btn wow fadeInUp" data-wow-delay="0.4s">View Latest Work</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="exp-filter mt-4 mt-lg-0">
              <ul suppressHydrationWarning className="nav nav-tabs border-0">
                <li><a suppressHydrationWarning href="#experience" data-bs-toggle="tab" className="active"><span>Experience</span></a></li>
                <li><a suppressHydrationWarning href="#education" data-bs-toggle="tab"><span>Education</span></a></li>
              </ul>
              <div className="tab-content">
                <div suppressHydrationWarning className="tab-pane fade show active" id="experience">
                  <div className="hm3-exp-box">
                    <div>
                      <h6 className="mb-1">Senior Product Manager</h6>
                      <p className="primary-text-color mb-0">Amar Bazar Ltd. Full-time</p>
                    </div>
                    <span className="date">2016-2022</span>
                  </div>
                  <div className="hm3-exp-box">
                    <div>
                      <h6 className="mb-1">Head of Product Design</h6>
                      <p className="primary-text-color mb-0">Inside Google Inc. · Full-time</p>
                    </div>
                    <span className="date">2016-2022</span>
                  </div>
                  <div className="hm3-exp-box">
                    <div>
                      <h6 className="mb-1">Website UI/UX Design</h6>
                      <p className="primary-text-color mb-0">Amar Bazar Ltd. Full-time</p>
                    </div>
                    <span className="date">2016-2022</span>
                  </div>
                </div>
                <div suppressHydrationWarning className="tab-pane fade" id="education">
                  <div className="hm3-exp-box">
                    <div>
                      <h6 className="mb-1">Secondary School Certificate</h6>
                      <p className="primary-text-color mb-0">Amar Bazar High School</p>
                    </div>
                    <span className="date">2016-2022</span>
                  </div>
                  <div className="hm3-exp-box">
                    <div>
                      <h6 className="mb-1">Higher Secondary Certificate</h6>
                      <p className="primary-text-color mb-0">Inside Google College</p>
                    </div>
                    <span className="date">2016-2022</span>
                  </div>
                  <div className="hm3-exp-box">
                    <div>
                      <h6 className="mb-1">Bsc In Computer Science</h6>
                      <p className="primary-text-color mb-0">Asian University</p>
                    </div>
                    <span className="date">2016-2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings}>

          <BrandItem
            title={`Figma`}
            logo={`/assets/images/icons/slack.svg`}
            percent={`100%`}
            theme={`white`}
          />
          <BrandItem
            title={`Photoshop`}
            logo={`/assets/images/icons/photoshop.svg`}
            percent={`98%`}
            theme={`white`}
          />
          <BrandItem
            title={`Illustrator`}
            logo={`/assets/images/icons/illustrator.svg`}
            percent={`88%`}
            theme={`white`}
          />
          <BrandItem
            title={`XD`}
            logo={`/assets/images/icons/xd.svg`}
            percent={`96%`}
            theme={`white`}
          />
          <BrandItem
            title={`Sketch`}
            logo={`/assets/images/icons/sketch.svg`}
            percent={`97%`}
            theme={`white`}
          />
          <BrandItem
            title={`Photoshop`}
            logo={`/assets/images/icons/photoshop.svg`}
            percent={`98%`}
            theme={`white`}
          />
          <BrandItem
            title={`Illustrator`}
            logo={`/assets/images/icons/illustrator.svg`}
            percent={`88%`}
            theme={`white`}
          />
        </Slider>
      </div>

    </section>
  )
}
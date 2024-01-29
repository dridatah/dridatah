"use client"
import React from 'react'
import Slider from "react-slick";
import SingleTeamMembarLayoutOne from '../single/team/SingleTeamMembarLayoutOne';
import Image from 'next/image';
export default function TeamMembars() {
  // Slider config 
  const settings = {
    className: 'hm2-team-slider mt-60',
    slidesToShow: 4,
    loop: true,
    arrows: false,
    autoplay: true,
    speed: 700,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="container pt-100 position-relative z-1">
      <Image src="/assets/images/shapes/net-vector.png" alt="net vector" className="position-absolute end-0 top-0 z--1" width={1576} height={840} />
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="text-center">
            <span suppressHydrationWarning className="cr-subtitle position-relative primary-text-color fw-semibold d-inline-block wow fadeInUp">Our Team Members</span>
            <h2 suppressHydrationWarning className="mt-4 mb-0 wow fadeInUp" data-wow-delay="0.2s">Meet with our <span className="primary-bg-light primary-text-color px-2">experts</span></h2>
          </div>
        </div>
      </div>
      <Slider {...settings} className="hm2-team-slider mt-60">
        <SingleTeamMembarLayoutOne
          name={`Roger Stevens`}
          designation={`Director`}
          avatar={`/assets/images/home-2/team-1.jpg`}
          link={`/team/details`}
        />
        <SingleTeamMembarLayoutOne
          name={`David Smith`}
          designation={`Director`}
          avatar={`/assets/images/home-2/team-2.jpg`}
          link={`/team/details`}
        />
        <SingleTeamMembarLayoutOne
          name={`Warren Luis`}
          designation={`Director`}
          avatar={`/assets/images/home-2/team-3.jpg`}
          link={`/team/details`}
        />
        <SingleTeamMembarLayoutOne
          name={`Stefen Brak`}
          designation={`Director`}
          avatar={`/assets/images/home-2/team-4.jpg`}
          link={`/team/details`}
        />
        <SingleTeamMembarLayoutOne
          name={`Welfare Dane`}
          designation={`Director`}
          avatar={`/assets/images/home-2/team-2.jpg`}
          link={`/team/details`}
        />

      </Slider>
    </div>
  )
}
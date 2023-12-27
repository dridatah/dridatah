"use client"
import Link from 'next/link'
import React from 'react'
import SinglePortfolioLayoutThree from '../single/portfolio/SinglePortfolioLayoutThree'


export default function InnerProjectSection() {
  return (
    <div className="hm5-projects-section mb-100">
      <div className="container-1660">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <span className="cr-subtitle position-relative primary-text-color fw-semibold">Unique Product Showcase</span>
              <h3 className="mt-4 text-white mt-4 ">Latest Project Showcase</h3>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-60">
          <div className="col-xl-4 col-md-6">
            <SinglePortfolioLayoutThree
              wrapperClass={`hm5-project-single`}
              subtitle={`Website Animation`}
              title={`Makeup Product Website`}
              thumbnail={`/assets/images/home-4/project-3.jpg`}
              link={`/project/details`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SinglePortfolioLayoutThree
              wrapperClass={`hm5-project-single`}
              subtitle={`Creative Animation`}
              title={`Creative Product Website`}
              thumbnail={`/assets/images/home-4/project-2.jpg`}
              link={`/project/details`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SinglePortfolioLayoutThree
              wrapperClass={`hm5-project-single`}
              subtitle={`Creative Animation`}
              title={`Kids Care Online Store`}
              thumbnail={`/assets/images/home-4/project-6.jpg`}
              link={`/project/details`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SinglePortfolioLayoutThree
              wrapperClass={`hm5-project-single`}
              subtitle={`Website Animation`}
              title={`Digital NFT Marketplace`}
              thumbnail={`/assets/images/home-4/project-4.jpg`}
              link={`/project/details`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SinglePortfolioLayoutThree
              wrapperClass={`hm5-project-single`}
              subtitle={`Creative Animation`}
              title={`Makeup Product`}
              thumbnail={`/assets/images/home-4/project-1.jpg`}
              link={`/project/details`}
            />
          </div>
          <div className="col-xl-4 col-md-6">
            <SinglePortfolioLayoutThree
              wrapperClass={`hm5-project-single`}
              subtitle={`Creative Animation`}
              title={`Digital NFT Marketplace`}
              thumbnail={`/assets/images/home-4/project-5.jpg`}
              link={`/project/details`}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
"use client"
import React from 'react'
import SinglePortfolioLayoutFour from '../single/portfolio/SinglePortfolioLayoutFour'

export default function ProjectsSection() {
  return (
    <section className="project-section ptb-100">
      <div className="container">
        <div className="row g-4">
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/1.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/2.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/3.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/4.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/5.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/6.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/7.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/8.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
          <SinglePortfolioLayoutFour
            wrapperClass={`col-lg-4 col-sm-6`}
            thumbnail={`/assets/images/projects/9.jpg`}
            title={`Web Development`}
            subtitle={`Development - Work`}
            link={`/project/details`}
          />
        </div>
      </div>
    </section>
  )
}
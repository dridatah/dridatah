import React from 'react'
import SinglePortfolioLayoutTwo from '../single/portfolio/SinglePortfolioLayoutTwo'

export default function ProjectSection() {
  return (
    <section className="hm3-project-section ptb-100 overflow-hidden" id="projects">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="text-center">
              <span suppressHydrationWarning className="cr-subtitle position-relative text-white wow fadeInUp">My Projects</span>
              <h2 suppressHydrationWarning className="text-white mt-4 wow fadeInUp" data-wow-delay="0.2s">My Recent <span className="primary-bg-light text-italic px-2 fw-normal">Projects</span></h2>
            </div>
          </div>
        </div>
        <div className="row g-4 g-lg-5 justify-content-center mt-5">
          <SinglePortfolioLayoutTwo
            smtitle={`UI/UX Product design`}
            title={`Online Beauty Product Design`}
            link={`/project/details`}
            thumbnail={`/assets/images/home-3/pr-1.jpg`}
            data_wow_delay={`0.0s`}
          />
          <SinglePortfolioLayoutTwo
            smtitle={`UI/UX Product design`}
            title={`Digital Agency Branding Design`}
            link={`/project/details`}
            thumbnail={`/assets/images/home-3/pr-2.jpg`}
            data_wow_delay={`0.2s`}
          />
          <SinglePortfolioLayoutTwo
            smtitle={`UI/UX Product design`}
            title={`App Landing Page Design`}
            link={`/project/details`}
            thumbnail={`/assets/images/home-3/pr-3.jpg`}
            data_wow_delay={`0.3s`}
          />
          <SinglePortfolioLayoutTwo
            smtitle={`UI/UX Product design`}
            title={`Mobile Application Design`}
            link={`/project/details`}
            thumbnail={`/assets/images/home-3/pr-4.jpg`}
            data_wow_delay={`0.4s`}
          />
        </div>
      </div>
    </section>
  )
}

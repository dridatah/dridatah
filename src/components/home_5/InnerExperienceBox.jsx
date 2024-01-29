"use client"
import React from 'react'
import ExperienceCard from '../single/experience/ExperienceCard'

export default function InnerExperienceBox() {
  return (
    <div className="hm5-exp-section pt-100">
      <div className="row justify-content-center">
        <div className="col-xl-7">
          <div className="section-title text-center">
            <span className="cr-subtitle position-relative fw-semibold primary-text-color">My Work Experience</span>
            <h3 className="text-white mt-4">Awesome Experience</h3>
          </div>
        </div>
      </div>
      <div className="hm5-exp-wrapper mt-60">
        <div className="row g-4">
          <ExperienceCard
            companyLogo={`/assets/images/icons/facebook.png`}
            designation={`UI/UX Designer`}
            companyName={`Facebook Limited`}
            duration={`Jan 2023 - Present`}
          />
          <ExperienceCard
            companyLogo={`/assets/images/icons/oyo.png`}
            designation={`UI/UX Designer`}
            companyName={`Oyo Bank Limited`}
            duration={`Jan 2023 - Present`}
          />
          <ExperienceCard
            companyLogo={`/assets/images/icons/twitter.png`}
            designation={`Product Manager`}
            companyName={`Twitter Limited`}
            duration={`Jan 2023 - Present`}
          />
          <ExperienceCard
            companyLogo={`/assets/images/icons/graphics.png`}
            designation={`Web Designer`}
            companyName={`STK Stream Limited`}
            duration={`Jan 2023 - Present`}
          />
          <ExperienceCard
            companyLogo={`/assets/images/icons/spotify.png`}
            designation={`UI/UX Designer`}
            companyName={`Spotify Limited`}
            duration={`Jan 2023 - Present`}
          />
          <ExperienceCard
            companyLogo={`/assets/images/icons/linkedin.png`}
            designation={`Graphic Designers`}
            companyName={`Linkdin Limited`}
            duration={`Jan 2023 - Present`}
          />
        </div>
      </div>
    </div>
  )
}
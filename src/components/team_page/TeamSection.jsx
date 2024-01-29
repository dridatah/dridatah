"use client"
import React from 'react'
import SingleTeamMembarLayoutTwo from '../single/team/SingleTeamMembarLayoutTwo'

export default function TeamSection() {
  return (
    <section className="team-section ptb-100">
      <div className="container">
        <div className="row g-4 justify-content-center">
          <div className="col-xl-4 col-sm-6 ">
            <SingleTeamMembarLayoutTwo
              name={`Jackson Levi`}
              designation={`Developer`}
              link={`/team/details`}
              thumbnail={`/assets/images/team/team-1.jpg`}
            />
          </div>
          <div className="col-xl-4 col-sm-6 ">
            <SingleTeamMembarLayoutTwo
              name={`David Jone`}
              designation={`Developer`}
              link={`/team/details`}
              thumbnail={`/assets/images/team/team-2.jpg`}
            />
          </div>

          <div className="col-xl-4 col-sm-6 ">
            <SingleTeamMembarLayoutTwo
              name={`Jonson Peter`}
              designation={`Developer`}
              link={`/team/details`}
              thumbnail={`/assets/images/team/team-3.jpg`}
            />
          </div>
          <div className="col-xl-4 col-sm-6 ">
            <SingleTeamMembarLayoutTwo
              name={`Michel Doe`}
              designation={`Developer`}
              link={`/team/details`}
              thumbnail={`/assets/images/team/team-4.jpg`}
            />
          </div>
          <div className="col-xl-4 col-sm-6 ">
            <SingleTeamMembarLayoutTwo
              name={`Jasica Jacy`}
              designation={`Developer`}
              link={`/team/details`}
              thumbnail={`/assets/images/team/team-5.jpg`}
            />
          </div>
          <div className="col-xl-4 col-sm-6 ">
            <SingleTeamMembarLayoutTwo
              name={`Olysa Jab`}
              designation={`Developer`}
              link={`/team/details`}
              thumbnail={`/assets/images/team/team-6.jpg`}
            />
          </div>

        </div>
      </div>
    </section>
  )
}
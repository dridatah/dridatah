import React from 'react'
import TeamMembars from './TeamMembars'
import TeamInfo from './TeamInfo'

export default function TeamSectionWrapper() {
  return (
    <section className="team-section bg-light-white overflow-hidden">
      <TeamMembars />
      <TeamInfo />
    </section>
  )
}

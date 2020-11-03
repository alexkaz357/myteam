import React from 'react'
import { AboutFirstSection } from '../cmps/about/AboutFirstSection'
import { AboutHeader } from '../cmps/about/AboutHeader'
import { AboutSecoundSection } from '../cmps/about/AboutSecoundSection'
import { GetStarted } from '../cmps/GetStarted'

export function About() {
  return (
    <section className="about">
      <AboutHeader />
      <AboutFirstSection />
      <AboutSecoundSection />
      <GetStarted />
    </section>
  )
}

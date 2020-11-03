import React, { useEffect, useState } from 'react'
import { service } from '../../services/service'
import { DirectorList } from './DirectorList'

export function AboutFirstSection() {

  const [directors, setDirectors] = useState(null)

  useEffect(() => {
    setDirectors(service.query())
    return () => {

    }
  }, [])

  if (!directors) return 'Loading...'

  return (

    <section className="about-first-section">

      <img className="section-img-1" src={require('../../assets/img/bg-pattern-about-2-contact-1.svg')} alt="" />
      <img className="section-img-2" src={require('../../assets/img/bg-pattern-home-4-about-3.svg')} alt="" />

      <img className="about-mobile-top" src={require('../../assets/img/about-mobile-top.svg')} alt="" />

      <div className="container">

        <p className="section-header">Meet the directors</p>

        <DirectorList directors={directors} />

      </div>

    </section>
  )
}
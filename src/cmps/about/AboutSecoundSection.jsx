import React from 'react'

export function AboutSecoundSection() {
  return (
    <section className="about-secound-section">

      <img className="section-img" src={require('../../assets/img/bg-pattern-about-4.svg')} alt="" />
      <img className="about-tablet" src={require('../../assets/img/about-tablet.svg')} alt="" />
      <img className="about-mobile-bottom" src={require('../../assets/img/about-mobile-bottom.svg')} alt="" />

      <div className="container">

        <p className="section-header">Some of our clients</p>

        <div className="img-container">
        <img className="img img-1" src={require('../../assets/img/logo-the-verge.png')} alt="" />
        <img className="img img-2" src={require('../../assets/img/logo-jakarta-post.png')} alt="" />
        <img className="img img-3" src={require('../../assets/img/logo-the-guardian.png')} alt="" />
        <img className="img img-4" src={require('../../assets/img/logo-tech-radar.png')} alt="" />
        <img className="img img-5" src={require('../../assets/img/logo-gadgets-now.png')} alt="" />
        </div>

      </div>

    </section>
  )
}

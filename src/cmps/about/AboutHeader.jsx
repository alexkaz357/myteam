import React from 'react'

export function AboutHeader() {
  return (
    <section className="about-header">

      <img className="header-img" src={require('../../assets/img/bg-pattern-about-1-mobile-nav-1.svg')} alt="" />

      <div className="container">

        <div className="about-text flex space-between">
          <p className="about">About</p>
          <div className="rectangle-text">
            <div className="rectangle"></div>
            <p className="text">We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

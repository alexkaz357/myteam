import React from 'react'

export function HomeHeader() {
  return (
    <section className="home-header">

      <img className="header-img-1" src={require('../../assets/img/bg-pattern-home-1.svg')} alt="" />

      <div className="container">

        <div className="header-text flex">
          <p className="main-text">Find the <br /> best <span>talent</span></p>
          <div className="secondary-container flex">
            <div className="secondary-line"></div>
            <p className="secondary-text">Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
          </div>
        </div>
        <img className="header-img-2" src={require('../../assets/img/bg-pattern-home-2.svg')} alt="" />
      </div>
    </section>
  )
}

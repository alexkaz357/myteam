import React from 'react'

export function HomeFirstSection() {
  return (
    <section className="home-first-section">

      <img className="section-img" src={require('../../assets/img/bg-pattern-home-3.svg')} alt="" />

      <div className="container flex space-between">

        <div className="left-content">
          <div className="rectangle"></div>
          <p>Build & manage distributed teams like no one else.</p>
        </div>

        <div className="right-content">

          <div className="info-box flex">
            <img className="info-box-img-first" src={require('../../assets/img/icon-person.svg')} alt="" />
            <div>
              <p className="info-box-main-text">Experienced Individuals</p>
              <p className="info-box-secondary-text">Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </div>
          </div>

          <div className="info-box flex">
            <img className="info-box-img" src={require('../../assets/img/icon-cog.svg')} alt="" />
            <div>
              <p className="info-box-main-text">Easy to Implement</p>
              <p className="info-box-secondary-text">Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </div>
          </div>

          <div className="info-box flex">
            <img className="info-box-img" src={require('../../assets/img/icon-chart.svg')} alt="" />
            <div>
              <p className="info-box-main-text">Enhanced Productivity</p>
              <p className="info-box-secondary-text">Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

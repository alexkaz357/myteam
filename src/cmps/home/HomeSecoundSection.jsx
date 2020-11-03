import React from 'react'

export function HomeSecoundSection() {
  return (
    <section className="home-secound-section">

      <img className="section-img-1" src={require('../../assets/img/bg-pattern-home-4-about-3.svg')} alt="" />
      <img className="section-img-2" src={require('../../assets/img/bg-pattern-home-5.svg')} alt="" />

      <div className="container">

        <p className="section-header-tablet">Delivering real results for top companies. Some of our <span>success stories.</span></p>

        <p className="section-header first">Delivering real results for top companies.</p>
        <p className="section-header secound">Some of our <span>success stories.</span></p>

        <div className="all-persons">
          <div className="about-person">
            <img className="quotes" src={require('../../assets/img/icon-quotes.svg')} alt="" />
            <p className="text-about-person">“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
            <p className="person-name">Kady Baker</p>
            <p className="person-job">Product Manager at Bookmark</p>
            <img className="person-img" src={require('../../assets/img/avatar-kady.jpg')} alt="" />
          </div>
          <div className="about-person">
            <img className="quotes" src={require('../../assets/img/icon-quotes.svg')} alt="" />
            <p className="text-about-person">“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
            <p className="person-name">Aiysha Reese</p>
            <p className="person-job">Founder of Manage</p>
            <img className="person-img" src={require('../../assets/img/avatar-aiysha.jpg')} alt="" />
          </div>
          <div className="about-person">
            <img className="quotes" src={require('../../assets/img/icon-quotes.svg')} alt="" />
            <p className="text-about-person">“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
            <p className="person-name">Arthur Clarke</p>
            <p className="person-job">Co-founder of MyPhysio</p>
            <img className="person-img" src={require('../../assets/img/avatar-arthur.jpg')} alt="" />
          </div>
        </div>

      </div>

    </section>
  )
}
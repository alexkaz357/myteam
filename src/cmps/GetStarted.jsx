import React from 'react'
import { NavLink } from 'react-router-dom'

export function GetStarted() {
  return (
    <div className="get-started">

      <img className="section-img" src={require('../assets/img/bg-pattern-home-6-about-5.svg')} alt="" />

      <img className="section-img-mobile" src={require('../assets/img/get-started-mobile.svg')} alt="" />

      <div className="content flex space-between align-center">
        <p className="main">Ready to get started?</p>
        <NavLink to='/contact'><p className="contact">contact us</p></NavLink>
      </div>
    </div>
  )
}

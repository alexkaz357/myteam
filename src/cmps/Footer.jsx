import React from 'react'
import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <section className="footer">

      <div className="container flex space-between">

        <div className="logo-adress flex align-center">
          <div className="nav flex column">
            <img className="logo" src={require('../assets/img/logo.svg')} alt="" />
            <div className="links flex">
              <NavLink to='/'><p className="home">home</p></NavLink>
              <NavLink to='/about'><p className="about">about</p></NavLink>
            </div>
          </div>

          <div className="address">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>

        <div className="social-copyright flex align-center">
          <div className="social-copyright-inner flex column">
            <div className="social-tags">
              <img className="social facebook" src={require('../assets/img/icon-facebook.svg')} alt="" />
              <img className="social pinterest" src={require('../assets/img/icon-pinterest.svg')} alt="" />
              <img className="social twitter" src={require('../assets/img/icon-twitter.svg')} alt="" />
            </div>
            <p className="copyright">Copyright 2020. All Rights Reserved</p>
          </div>

        </div>

      </div>

    </section>
  )
}

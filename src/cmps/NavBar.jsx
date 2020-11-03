import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'



export function NavBar() {

  const [isMenu, setIsMenu] = useState(false)

  function toggleMenu() {
    document.body.classList.toggle('menu-open')
    setIsMenu(!isMenu)
  }

  return (
    <section className="nav-bar flex align-center container">

      <img className="logo" src={require('../assets/img/logo.svg')} alt="" />

      <div className='screen' onClick={toggleMenu}></div>

      <div className={`links flex align-center ${isMenu ? '' : 'closed'}`}>
        <img className="close" src={require('../assets/img/icon-close.svg')} alt="" onClick={toggleMenu} />
        <NavLink to='/' onClick={toggleMenu}><p className="home">home</p></NavLink>
        <NavLink to='/about' onClick={toggleMenu}><p className="about">about</p></NavLink>
        <NavLink to='/contact' className="contact-link" onClick={toggleMenu}><p className="contact">contact us</p></NavLink>
      </div>
      <img className="menu-btn" src={require('../assets/img/icon-hamburger.svg')} alt="" onClick={toggleMenu} />
    </section >
  )
}

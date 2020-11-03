import React, { useState } from 'react'

export function DirectorPreview({ director }) {

  const [isInfo, setIsInfo] = useState(false)

  function toggleDirectorInfo() {
    setIsInfo(!isInfo)
  }

  return (
    <section className="director-preview">
      <div className="director">
        {!isInfo && <img className="director-img" src={director.img} alt="" />}
        <p className={`director-name ${isInfo ? 'name-padding' : ''}`}>{director.name}</p>
        {!isInfo && <p className="director-position">{director.position}</p>}
        {isInfo && <div className="director-about">
          <p className="director-about-text">{director.about}</p>
          <div className="director-about-social">
            <img src={require('../../assets/img/icon-twitter.svg')} alt="" />
            <img src={require('../../assets/img/icon-linkedin.svg')} alt="" />
          </div>
        </div>}
        <div className={`director-cross ${isInfo ? 'cross-change' : ''}`} onClick={toggleDirectorInfo}>
          <img src={require('../../assets/img/icon-cross.svg')} alt="" />
        </div>
      </div>
    </section>
  )
}

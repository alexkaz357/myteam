import React, { useState } from 'react'
import { service } from '../../services/service'

export function ContactHeader() {

  const [isName, setIsName] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isMessage, setIsMessage] = useState(false)

  const [isNameText, setIsNameText] = useState(false)
  const [isEmailText, setIsEmailText] = useState(false)
  const [isMessageText, setIsMessageText] = useState(false)

  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isContacted, setIsContacted] = useState(false)

  function onSubmit(ev) {
    ev.preventDefault();

    if (!isName) setIsName(true)
    if (isNameText) setIsName(false)
    if (!isEmail) setIsEmail(true)
    if (isEmailText) setIsEmail(false)
    if (!isMessage) setIsMessage(true)
    if (isMessageText) setIsMessage(false)
    if (!isNameText || !isEmailText || !isMessageText) return

    setIsContacted(true)
    setTimeout(() => setIsContacted(false), 2000);
    document.getElementById('form').reset();
    setIsNameText(false)
    setIsEmailText(false)
    setIsMessageText(false)
  }

  function handleChange({ target }) {
    const field = target.name
    const value = target.value
    if (field === 'name' && value !== '') {
      setIsName(false)
      setIsNameText(true)
    }
    else if (field === 'name' && value === '') setIsName(true)

    if (field === 'email' && value !== '') {
      setIsEmail(false)
      setIsEmailText(true)
      setIsValidEmail(service.validateEmail(value))
    }
    else if (field === 'email' && value === '') {
      setIsEmail(true)
      setIsValidEmail(true)
    }

    if (field === 'message' && value !== '') {
      setIsMessage(false)
      setIsMessageText(true)
    }
    else if (field === 'message' && value === '') setIsMessage(true)
  }

  function handleFocusName({ target }) {
    const field = target.name
    const value = target.value
    if (field === 'name' && value !== '') return
    setIsName(true)
  }

  function handleBlurName() {
    setIsName(false)
  }

  function handleFocusEmail({ target }) {
    const field = target.name
    const value = target.value
    if (field === 'email' && value !== '') return
    setIsEmail(true)
  }

  function handleBlurEmail() {
    setIsEmail(false)
  }

  function handleFocusMessage({ target }) {
    const field = target.name
    const value = target.value
    if (field === 'message' && value !== '') return
    setIsMessage(true)
  }

  function handleBlurMessage() {
    setIsMessage(false)
  }

  return (
    <section className="contact-header">

      <img className="header-img-1" src={require('../../assets/img/bg-pattern-about-2-contact-1.svg')} alt="" />
      <img className="header-img-2" src={require('../../assets/img/bg-pattern-contact-2.svg')} alt="" />

      <div className="container">

        <div className="content flex space-between">

          <div className="contact-info">
            <p className="contact">Contact</p>
            <p className="ask">Ask us about</p>
            <div className="ask-box flex">
              <img className="img img-1" src={require('../../assets/img/icon-person.svg')} alt="" />
              <p className="text">The quality of our talent network</p>
            </div>
            <div className="ask-box flex">
              <img className="img img-2" src={require('../../assets/img/icon-cog.svg')} alt="" />
              <p className="text">Usage & implementation of our software</p>
            </div>
            <div className="ask-box flex">
              <img className="img img-3" src={require('../../assets/img/icon-chart.svg')} alt="" />
              <p className="text">How we help drive innovation</p>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={onSubmit} className="flex wrap" id="form">
              <div className="name-required-input">
                <input className={`${isName ? 'error' : ''}`} type="text" name="name" placeholder="Name" onChange={handleChange} onFocus={handleFocusName} onBlur={handleBlurName} autoComplete="off" />
                <p className={`name-required-text ${isName ? '' : 'hide'}`}>This field is required</p>
              </div>
              <div className="email-required-input">
                <input className={`${isEmail ? 'error' : ''}`} type="email" name="email" placeholder="Email Address" onChange={handleChange} onFocus={handleFocusEmail} onBlur={handleBlurEmail} autoComplete="off" />
                <p className={`email-required-text ${isEmail ? '' : 'hide'}`}>This field is required</p>
                {!isValidEmail && isEmailText && <p className="email-validate-text">Please use a valid email address</p>}
              </div>
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Title" />

              <div className="message-required-input">
                <textarea className={`${isMessage ? 'error' : ''}`} name="message" rows="3" placeholder="Message" onChange={handleChange} onFocus={handleFocusMessage} onBlur={handleBlurMessage} autoComplete="off" ></textarea>
                <p className={`message-required-text ${isMessage ? '' : 'hide'}`}>This field is required</p>
              </div>

              <div className="button-ok flex space-between align-center">
                <button onClick={onSubmit}>submit</button>
                <p className={`ok ${isContacted ? '' : 'hide'}`}>Thank you for contacting us&nbsp;&nbsp;&nbsp;<i className="fas fa-check"></i></p>
              </div>

            </form>
          </div>
        </div>
      </div>

    </section>
  )
}
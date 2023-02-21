import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import footerImg from '../../assets/footer-img.jpg'
import logoImg from '../../assets/logo.png'

function Footer() {
  return (
    <div className='footer' style={{ backgroundImage: `url(${footerImg})` }}>
      <div className='footer-logo'>
        <Link to="/">MOVIE APP</Link>
      </div>
      <div className='footer__content__menus'>
        <div className='footer__content__menu'>
          <Link to='/'>Home</Link>
          <Link to='/'>Contact Us</Link>
          <Link to='/'>Term of services</Link>
          <Link to='/'>About us</Link>
        </div>
        <div className='footer__content__menu'>
          <Link to='/'>Live</Link>
          <Link to='/'>FAQ</Link>
          <Link to='/'>Premium</Link>
          <Link to='/'>Privacy policy</Link>
        </div>
        <div className='footer__content__menu'>
          <Link to='/'>You must watch</Link>
          <Link to='/'>Recent release</Link>
          <Link to='/'>Top IMBD</Link>
          <Link to='/'>About us</Link>
        </div>
      </div>
      <p> All Rights Reserved &copy; <span>yulia kuderko.</span></p>
    </div>
  )
}

export default Footer
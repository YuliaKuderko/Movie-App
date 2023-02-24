import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import footerImg from '../../assets/footer-img.jpg'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };
  return (
    <div className='footer' style={{ backgroundImage: `url(${footerImg})` }}>
      <div className='footer-logo'>
        <Link to="/">MOVIE APP</Link>
      </div>
      <div className='footer__content__menus'>
        <div className='footer__content__menu'>
          <Link to='/' onClick={scrollToTop}>Home</Link>
          <Link to='/contact' onClick={scrollToTop}>Contact Us</Link>
          <Link to='/'>Terms of service</Link>
          <Link to='/about'>About us</Link>
        </div>
        <div className='footer__content__menu'>
          <Link to='/live'>Live</Link>
          <Link to='/faq' onClick={scrollToTop}>FAQ</Link>
          <Link to='/premium'>Premium</Link>
          <Link to='/policy'>Privacy policy</Link>
        </div>
        <div className='footer__content__menu'>
          <Link to='/must_watch'>Must watch</Link>
          <Link to='/recent_release'>Recent release</Link>
          <Link to='/top_imdb'>Top IMBD</Link>
          <Link to='/subscribe'>Subscribe</Link>
        </div>
      </div>
      <p> All Rights Reserved &copy; <span>yulia kuderko.</span></p>
    </div>
  )
}

export default Footer
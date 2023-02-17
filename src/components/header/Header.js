import React, { useEffect, useRef } from 'react'
import './header.scss'
import { Link, useLocation } from 'react-router-dom'

const headerNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Movies',
    path: '/movie'
  },
  {
    display: 'TV shows',
    path: '/tv'
  }

]
function Header() {

  const { pathName } = useLocation()
  const headerRef = useRef(null)
  const active = headerNav.findIndex(e => e.path === pathName)

  useEffect(() => {
    const shrinkHeader = () => {
      if (window.scrollY >= 10) {
        headerRef.current.classList.add('shrink')
      } else {
        headerRef.current.classList.remove('shrink')
      }
    }
    window.addEventListener('scroll', shrinkHeader)
    return () => {
      window.removeEventListener('scroll', shrinkHeader)
    }
  }, [])
  return (
    <div ref={headerRef} className="header">
      <div className='header__wrap container'>
        <div className='logo'>
          <Link to="/">app logo</Link></div>
      </div>
      <ul className='header__nav'>
        {headerNav.map((e, i) => (
          <li key={i} className={i === active ? 'active' : ''}>
            <Link to={e.path}>{e.display}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
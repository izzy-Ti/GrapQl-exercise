import React from 'react'
import logo from './../../assets/logo.png'
import './header.css'

const Header = () => {

  return (
    <div>
      <nav className='navbar'>
        <div className="nav_container">
          <a href="/" className='navbar-brand'>
              <img src={logo} alt="" className='brand_logo'/>
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header

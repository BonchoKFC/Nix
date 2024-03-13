import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Navbar = () => {
  return (
    <div className="nix__navbar">
      <div className="nix__navbar__links">
        <div className="nix__navbar-links-logo">
          <img src={logo} alt ="logo"/>
        </div>
        <div className="nix__navbar-links_container"> 
          <p><a href="#home">Home</a></p>
          <p><a href="#whatNix">Why Nix</a></p>
          <p><a href="#features">Features</a></p>
          <p><a href="#possibility">possibility</a></p>
          <p><a href="#blog">Blog</a></p>
        </div>
      </div>
      <div className='nix__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
import React, {useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Menu = () => (
<>
<p><a href="#home">Home</a></p>
<p><a href="#whatNix">Why Nix</a></p>
<p><a href="#features">Features</a></p>
<p><a href="#possibility">possibility</a></p>
<p><a href="#blog">Blog</a></p>
</>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nix__navbar">
      <div className="nix__navbar__links">
        <div className="nix__navbar-links-logo">
          <img src={logo} alt ="logo"/>
        </div>
        <div className="nix__navbar-links_container"> 
        <Menu/>
        </div>
      </div>
      <div className='nix__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='nix__navbar-menu'> </div>{
        toggleMenu
        ? <RiCloseLine color="#fff" size ={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#fff" size ={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu &&(
        <div className="nix__navbar-menu_container scale-up-center">
          <div className='nix_navbar-menu_container-links'>
            <Menu />
            <div className='nix__navbar-sign-menu_container-links-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
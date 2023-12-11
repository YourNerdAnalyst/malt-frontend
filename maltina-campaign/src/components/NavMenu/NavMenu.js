import React, { useState } from 'react'
import Logo from '../../images/favicon.png'
import {MdMenuOpen, MdClose} from 'react-icons/md'
import './style/navmenu.css'
import { NavLink } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

const NavMenu = () => {
    
    const [showNav,setShowNav] = useState(false)
    const toggleNav = () => {
        setShowNav(!showNav)
    }


  return (
    <div className='navmenu'>
      <div className='navhead'>
        <div className='logo-div'>
            <NavLink to='/'>
            <img src={Logo} alt='companys-logo' width={'46px'} />
            </NavLink>
        </div>
        <div className='md-menu'
        onClick={toggleNav}
        onKeyDown={toggleNav}
        role='button'
        tabIndex={0}
        >
            <h2 className='menu-tag'>MENU</h2>
            <MdMenuOpen color='#e89925' fontSize='25px' className='md-animation md-open-animation' />
        </div>
      </div>

      <ul className={showNav ? "nav-ul" : "nav-ul hide-item"}>
        <div className='close'
         onClick={toggleNav}
         role="button"
         onKeyDown={toggleNav}
         tabIndex={0}
        >
            <MdClose color='white' fontSize='28px' />
        </div>
        <div className='close-white'
         onClick={toggleNav}
         role="button"
         onKeyDown={toggleNav}
         tabIndex={0}
        >
            <MdClose color='white' fontSize='28px' />
        </div>

        <li onClick={toggleNav}>
            <NavLink to='/'>
                Home
            </NavLink>
        </li>
        <li onClick={toggleNav}>
            <Link to='#owoluabi' smooth>
                Together Happiness Happens
            </Link>
        </li>
        <li onClick={toggleNav}>
            <Link to='#generate' smooth>
                Generate your badge
            </Link>
        </li>
        <li onClick={toggleNav}>
            <NavLink to='/terms'>
                Terms and Conditions
            </NavLink>
        </li>
        <li onClick={toggleNav}>
            <NavLink to='/cookie'>
                Cookie Policy
            </NavLink>
        </li>
        <li onClick={toggleNav}>
            <NavLink to='/privacy'>
                Privacy Policy
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu

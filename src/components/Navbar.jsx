import React from 'react'
import Logo from '../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-logo'>
            <img src={Logo} alt=''  height={120} width={120}/>
        </div>  
    </nav>
      
  )
}

export default Navbar

import React from 'react'
import Logo from '../assets/logo.png'
import './Navbar.css'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import FlagIcon from '@mui/icons-material/Flag';
import DehazeIcon from '@mui/icons-material/Dehaze';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-logo'>
            <img src={Logo} alt=''  height={120} width={120}/>
            
        </div>  
        <p className='crm-desc'>Salf Real Estate CRM</p>
        
    </nav>
    
      
  )
}

export default Navbar

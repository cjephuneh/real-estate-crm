import React from 'react'
import Logo from '../assets/logo.png'
import './Navbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FlagIcon from '@mui/icons-material/Flag';


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-logo'>
            <img src={Logo} alt=''  height={120} width={120}/>
            
        </div>  
        <p className='crm-desc'>Salf Real Estate CRM</p>
        <button>
            New lead
        </button>
        <div>
            <NotificationsActiveIcon />
        </div>
        <div>
            <FlagIcon />
        </div>
        <div>

        </div>
    </nav>
      
  )
}

export default Navbar

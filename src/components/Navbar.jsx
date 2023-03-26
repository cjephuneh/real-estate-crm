import React from 'react'
import Logo from '../assets/logo.png'
import './Navbar.css'
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-logo'>
            <img src={Logo} alt=''  height={120} width={120}/>
            
        </div>  
        <p className='crm-desc'>Salf Real Estate CRM</p>

        
        <div classname='wrapper'>
        
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://avatars.githubusercontent.com/u/92708967?v=4"
              alt=""
              className="avatar"
            />
            </div>
        </div>
        </div>
    </nav>
    
      
  )
}

export default Navbar

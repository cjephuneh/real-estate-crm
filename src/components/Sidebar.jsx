import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ApprovalIcon from '@mui/icons-material/Approval';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div >
        <ul className='sidebar_list'>
          <li>
            <HomeIcon className="icon" />
            <span className='item_desc'>Dashboard</span>
          </li>
          <li>
            <AccountTreeIcon className="icon" />
            <span className='item_desc'>Projects</span>
          </li>
          <li>
            <AddTaskIcon className="icon" />
            <span className='item_desc'>Task Manager</span>
          </li>
          <li>
            <ApprovalIcon className="icon" />
            <span className='item_desc'>Approvals</span>
          </li>
          <li>
            <SignalCellularAltIcon className="icon" />
            <span className='item_desc'>Marketing</span>
          </li>
          <li>
            <EmojiEventsIcon className="icon" />
            <span className='item_desc'>Leads</span>
          </li>
          <li>
            <SummarizeIcon className="icon" />
            <span className='item_desc'>Leads Reports</span>
          </li>
          <li>
            <PersonAddIcon className="icon" />
            <span className='item_desc'>Clients</span>
          </li>
          <li>
            <CampaignIcon className="icon" />
            <span className='item_desc'>Mass comm.</span>
          </li>
          <li>
            <ManageAccountsIcon className="icon" />
            <span className='item_desc'>Admin</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar


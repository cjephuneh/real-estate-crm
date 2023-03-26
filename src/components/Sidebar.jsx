import React from 'react'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ApprovalIcon from '@mui/icons-material/Approval';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CampaignIcon from '@mui/icons-material/Campaign';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div>
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <AccountTreeIcon className="icon" />
            <span>Projects</span>
          </li>
          <li>
            <AddTaskIcon className="icon" />
            <span>Task Manager</span>
          </li>
          <li>
            <ApprovalIcon className="icon" />
            <span>Approvals</span>
          </li>
          <li>
            <SignalCellularAltIcon className="icon" />
            <span>Marketing</span>
          </li>
          <li>
            <EmojiEventsIcon className="icon" />
            <span>Leads</span>
          </li>
          <li>
            <SummarizeIcon className="icon" />
            <span>Leads Reports</span>
          </li>
          <li>
            <PersonAddIcon className="icon" />
            <span>Clients</span>
          </li>
          <li>
            <CampaignIcon className="icon" />
            <span>Mass comm.</span>
          </li>
          <li>
            <ManageAccountsIcon className="icon" />
            <span>Admin</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar


// src/components/BottomNavBar.jsx

import { NavLink } from 'react-router-dom'

// 🧭 explore
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import ExploreIcon from '@mui/icons-material/Explore'
// 🤝 match
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import HandshakeIcon from '@mui/icons-material/Handshake'
// 💬 chat
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined'
// 👤 profile
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import PersonIcon from '@mui/icons-material/Person'

const navLinkStyle = 'p-2.5'

// Active page has filled icon (default: outlined)
export default function BottomNavBar({ currentPage }) {
  return (
    <nav className='bg-transparent-white backdrop-blur-sm z-10 flex flex-row justify-around items-center text-2xl'>
      <NavLink to='/' className={navLinkStyle}>
        {({ isActive }) => (isActive ? <ExploreIcon fontSize='inherit' /> : <ExploreOutlinedIcon fontSize='inherit' />)}
      </NavLink>
      <NavLink to='/match' className={navLinkStyle}>
        {({ isActive }) => (isActive ? <HandshakeIcon fontSize='inherit' /> : <HandshakeOutlinedIcon fontSize='inherit' />)}
      </NavLink>
      <NavLink to='/chat' className={navLinkStyle}>
        {({ isActive }) => (isActive ? <ChatBubbleOutlinedIcon fontSize='inherit' /> : <ChatBubbleOutlineOutlinedIcon fontSize='inherit' />)}
      </NavLink>
      <NavLink to='/profile' className={navLinkStyle}>
        {({ isActive }) => (isActive ? <PersonIcon fontSize='inherit' /> : <PersonOutlinedIcon fontSize='inherit' />)}
      </NavLink>
    </nav>
  )
}

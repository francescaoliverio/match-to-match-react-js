// src/components/TopNavBar.jsx

import Button from './Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Show login btn (not logged in) or name + logout btn (logged in)
export default function TopNavBar() {
  const { logout } = useAuth()
  const { user } = useAuth()

  return (
    <nav className='bg-tertiary text-white z-10 flex flex-row justify-between items-center px-5 py-2.5'>
      {/* Logo */}
      <Link to='/'>
        <div className='size-10 rounded-full self-center flex justify-center items-center bg-tertiary'>
          <img src='/logo/logo-bg-transparent.svg' alt='Match to Match logo' className='size-12' />
        </div>
      </Link>
      {user ? (
        <div className='flex flex-row items-center gap-5'>
          {/* User Name */}
          <p>{user.firstName}</p>
          {/* Log out */}
          <Button label='Esci' variant='primary' onClick={logout} />
        </div>
      ) : (
        <>
          {/* Log in */}
          <Link to='/profile/login'>
            <Button label='Accedi' variant='primary' />
          </Link>
        </>
      )}
    </nav>
  )
}

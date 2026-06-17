// src/components/LoginForm.jsx

import { useNavigate, Link } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import Button from './Button'
import ErrorBox from './ErrorBox'

// 👁️ Show/hide password icons
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'

const inputStyle = 'flex items-center px-5 py-2.5 w-full rounded-full bg-white text-tertiary focus:outline-none focus:ring-2 ring-transparent-secondary shadow-md shadow-dark-overlay disabled:cursor-default'

export default function LoginForm() {
  const navigate = useNavigate()
  // Auth hook
  const { login } = useAuth()
  // Input refs
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  // useStates for show/hide pwd btn and login errors
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState(null)

  // On submit fetch credentials and check if valid
  async function submitForm(e) {
    // Prevent default action when button is clicked
    e.preventDefault()
    setLoginError(null)

    // UseRef to get input values when button is clicked
    const email = emailRef.current.value
    const password = passwordRef.current.value

    try {
      const res = await fetch(`/api/users?email=${email}`)
      if (!res.ok) throw new Error('Errore di connessione al server')
      const usersFound = await res.json()
      if (usersFound.length === 0 || usersFound[0].password !== password) {
        throw new Error('Email o password errati. Riprova.')
      }
      // If credentials match (and no error), login and go to profile
      const loggedInUser = usersFound[0]
      login(loggedInUser)
      navigate('/profile')
    } catch (error) {
      setLoginError(error.message)
      console.error(error)
    }
  }

  return (
    <div className='max-w-sm flex flex-col items-stretch gap-5 p-5 bg-transparent-tertiary text-white rounded-2xl shadow-md shadow-dark-overlay'>
      {/* Logo */}
      <div className='size-20 rounded-full self-center flex justify-center items-center bg-tertiary'>
        <img src='/logo/logo-bg-transparent.svg' alt='Match to Match logo' className='size-12' />
      </div>
      {/* Form */}
      <form onSubmit={submitForm} className='flex flex-col items-center gap-5'>
        {/* Email */}
        <label htmlFor='email' className='hidden'>
          Email:
        </label>
        <input ref={emailRef} id='email' type='email' placeholder='Email' className={inputStyle} autoComplete='email' required />
        {/* Password */}
        <label htmlFor='password' className='hidden'>
          Password:
        </label>
        <div className='relative w-full'>
          <input ref={passwordRef} id='password' type={showPassword ? 'text' : 'password'} placeholder='Password' className={`${inputStyle} pr-12`} onBlur={() => setShowPassword(false)} required />
          {/* Show/hide password 👁️ */}
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute right-4 top-1/2 -translate-y-1/2 text-tertiary hover:cursor-pointer flex items-center justify-center'
            aria-label={showPassword ? 'Nascondi password' : 'Mostra password'}>
            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
          </button>
        </div>
        {/* Error box if login goes wrong */}
        {loginError && <ErrorBox className='m-0 w-full'>{loginError}</ErrorBox>}
        {/* Forgot password */}
        <Link to=''>password dimenticata?</Link>
        {/* Login button */}
        <Button label='Accedi' variant='primary' type='submit' />
      </form>
    </div>
  )
}

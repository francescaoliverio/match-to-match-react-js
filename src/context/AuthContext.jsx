// src/context/AuthContext.jsx

/**
 * QUICK USAGE GUIDE:
 *
 * * 1. To handle Login:
 * const { login } = useAuth();
 * // Inside submit function, after validating credentials:
 * login(authenticatedUserData);
 *
 * * 2. To handle Logout:
 * const { logout } = useAuth();
 * // Inside logout button click handler:
 * onClick={logout}
 *
 * * 3. To access logged-in user data:
 * const { user } = useAuth();
 * console.log(user?.firstName);
 */

import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  // On app initialization, check if a logged-in user already exists in localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })
  // Save user data to both state and localStorage when successful authentication
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }
  // Clear user data from both state and localStorage when logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

// Custom Hook to consume the auth context within components
export const useAuth = () => useContext(AuthContext)

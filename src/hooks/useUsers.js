// src/hooks/useUsers.js

import { useEffect, useState } from 'react'

export function useUsers() {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users')
        if (!response.ok) {
          throw new Error('Impossibile caricare gli utenti')
        }
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError(err.message || 'Connessione al server fallita')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  return { users, loading, error }
}

// src/hooks/useUsers.js

import { useEffect, useState } from "react"

export function useCategories() {
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories")
        if (!response.ok) {
          throw new Error("Impossibile caricare le categorie")
        }
        const data = await response.json()
        setCategories(data)
      } catch (err) {
        setError(err.message || "Connessione al server fallita")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}

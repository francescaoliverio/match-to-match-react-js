// src/hooks/useUsers.js

import { useEffect, useState } from "react"

export function useCategories() {
  const [categories, setCategories] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories')
        console.log("Response:", response)
        const data = await response.json()
        console.log("Data:", data)
        setCategories(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return { categories, loading, error }
}
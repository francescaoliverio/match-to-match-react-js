// src\hooks\handleMatch.js

import { useState } from "react"

export function useHandleMatch() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const confirmMatch = async (matchData) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/matches", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user1Id: matchData.user1Id,
          user2Id: matchData.user2Id,
          status: "confirmed",
          notes: matchData.notes ?? "",
        }),
      })
      // console.log("Response:", response)
      // const data = await response.json()
      // console.log("Match confermato:", data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const cancelMatch = async (matchId) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/matches/${matchId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "cancelled" }),
      })
      // console.log("Response:", response)
      // const data = await response.json()
      // console.log("Match cancellato:", data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { confirmMatch, cancelMatch, loading, error }
}
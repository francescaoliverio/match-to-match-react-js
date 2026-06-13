// src/hooks/useChatList.js

import { useEffect, useState } from "react"

export function useChatList() {
  const [chatList, setChatList] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await fetch("/api//chats?userId=1")
        if (!response.ok) {
          throw new Error("Impossibile caricare le chat")
        }
        const data = await response.json()
        setChatList(data)
      } catch (err) {
        setError(err.message || "Connessione al server fallita")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchChatList()
  }, [])

  return { chatList, loading, error }
}

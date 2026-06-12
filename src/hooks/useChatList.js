// src/hooks/useChatList.js

import { useEffect, useState } from "react";

export function useChatList() {
  const [chatList, setChatList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChatList = async () => {
      try {
        const response = await fetch("/api//chats?userId=1");
        console.log("Response:", response);
        const data = await response.json();
        console.log("Data:", data);
        setChatList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChatList();
  }, []);

  return { chatList, loading, error };
}

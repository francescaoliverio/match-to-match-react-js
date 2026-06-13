// src/components/ChatList.jsx

import Button from "./Button"
import ErrorBox from "./ErrorBox"
import SearchBar from "./SearchBar"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import { useChatList } from "../hooks/useChatlist"
import { useUsers } from "../hooks/useUsers"
import { useState, useEffect } from "react"
import { cn } from "../lib/utils"

export default function ChatList({ onSelectChat, activeChatId, className }) {
  const { chatList, loading: chatListLoading, error: chatListError } = useChatList()
  const { users, loading: usersLoading, error: usersError } = useUsers()

  if (chatListError || usersError) return (
    <ErrorBox><strong>Errore: </strong>{chatListError || usersError}</ErrorBox>
    )

  return (
    <div className={cn("px-2.5 h-full overflow-y-auto relative", className)}>
      {/* Searchbar (to search chats) */}
      <SearchBar placeholder="search" className="sticky top-0 z-1 backdrop-blur-xs">
        <Button variant="transparent" className="p-1.5">
          <SearchOutlinedIcon />
        </Button>
      </SearchBar>
      {/* List of chats (map from fetch) */}
      {chatList && users ? (
        <div className="flex flex-col gap-5 py-5">
          {chatList.map((chat) => {
            const user = users?.find((u) => u.id === chat.partnerId)
            const isActive = chat.id === activeChatId
            return (
              <div key={chat.id} onClick={() => onSelectChat(chat.id)} className={cn("relative flex flex-row items-center gap-5 p-5 rounded-2xl shadow-md shadow-dark-overlay hover:cursor-pointer", isActive ? "bg-grey-lighter" : "bg-white")}>
                {/* Unread messages */}
                {chat.unreadCount > 0 && <div className="flex items-center justify-center font-bold absolute -top-1 -right-1 size-8 bg-secondary rounded-full">{chat.unreadCount}</div>}
                {/* Profile picture */}
                <div className="shrink-0 grow-0 size-12 rounded-full overflow-hidden bg-tertiary">
                  <img src={user?.avatar} alt="profile picture" />
                </div>
                <div>
                  {/* User name */}
                  <h4>{user ? `${user.firstName}` : "Utente Sconosciuto"}</h4>
                  {/* Last message */}
                  <p className="line-clamp-1 text-clip">{chat.lastMessage}</p>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="flex flex-row items-center gap-5 p-5 mt-5 bg-white rounded-2xl shadow-md shadow-dark-overlay animate-pulse hover:cursor-progress">
          <div className="size-12 rounded-full bg-grey-lighter" />
          <p className="text-grey-light">Caricamento...</p>
        </div>
      )}
    </div>
  )
}

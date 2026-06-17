// src/pages/Chat.jsx

import ChatList from '../components/ChatList'
import OpenChat from '../components/OpenChat'
import { useState, useEffect } from 'react'

import { cn } from '../lib/utils'
import { SECTION_STYLES } from '../styles/styles'

export default function Chat() {
  const [activeChat, setActiveChat] = useState(null)

  return (
    <section className={cn(SECTION_STYLES, 'md:flex-row items-stretch justify-center gap-5 h-full')}>
      <ChatList onSelectChat={setActiveChat} activeChatId={activeChat} className={activeChat ? 'hidden md:block' : 'block'} />
      <OpenChat onBack={() => setActiveChat(null)} className={activeChat ? 'flex' : 'hidden md:flex'} />
    </section>
  )
}

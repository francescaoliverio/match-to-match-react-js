import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useChatList } from "../hooks/useChatlist";
import { useUsers } from "../hooks/useUsers";
import { useState, useEffect } from "react";

export default function ChatList() {
  const { chatList, loading: chatListLoading, error: chatListError } = useChatList();
  const { users, loading: usersLoading, error: usersError } = useUsers();

  return (
    <>
      <div>
        <h2>Elenco Chat</h2>
        <SearchBar placeholder="search">
          <Button variant="transparent" className="p-1.5">
            <SearchOutlinedIcon />
          </Button>
        </SearchBar>
        {chatList ? (
          <div className="flex flex-col gap-5 py-5">
            {chatList.map((chat) => {
              const user = users.find((u) => u.id === chat.partnerId);
              return (
                <div key={chat.id} className="relative flex flex-row items-center gap-5 p-5 bg-white rounded-2xl shadow-md shadow-dark-overlay hover:cursor-pointer">
                  {chat.unreadCount > 0 && <div className="flex items-center justify-center font-bold absolute -top-1 -right-1 w-8 h-8 bg-secondary rounded-full">{chat.unreadCount}</div>}
                  {/* Profile Picture */}
                  <div className="w-12 h-12 rounded-full overflow-hidden flex justify-center items-center bg-tertiary">
                    <img src={user.avatar} alt="profile picture" />
                  </div>
                  <div>
                    <h4>{user ? `${user.firstName} ${user.lastName || ""}` : "Utente Sconosciuto"}</h4>
                    <p className="line-clamp-1 text-clip">{chat.lastMessage}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "Caricamento..."
        )}
      </div>
    </>
  );
}

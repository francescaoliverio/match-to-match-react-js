import ChatList from "../components/ChatList";
import OpenChat from "../components/OpenChat";
import { useState, useEffect } from "react";

export default function Chat() {
  return (
    <>
      <h1>Chat</h1>
      <div className="grow flex flex-col md:flex-row items-stretch justify-center gap-5 w-full p-5">
        <ChatList />
        <OpenChat />
      </div>
    </>
  );
}

import ChatList from "../components/ChatList";
import OpenChat from "../components/OpenChat";
import { useState, useEffect } from "react";

export default function Chat() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-5 p-5 w-full lg:w-250 h-full">
        <ChatList />
        <OpenChat />
      </div>
    </>
  );
}

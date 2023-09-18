import React from "react";
import ChatBox from "../../Components/Admin/ChatBox/ChatBox";
import AdminSidebar from "../../Components/Admin/AdminNavbar/AdminSidebar";
import AdminNav from "../../Components/Admin/AdminNavbar/AdminNav";

function ChatBoxPage() {
  return (
    <div>
      <AdminNav />
      <div className="flex">
        <AdminSidebar />
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatBoxPage;

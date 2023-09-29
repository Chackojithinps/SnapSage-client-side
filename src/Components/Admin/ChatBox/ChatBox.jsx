import React, { useEffect, useRef, useState } from "react";
import { adminSendMessage, chatListsData, userChats } from "../../../Utils/AdminEndpoints";
import { io } from "socket.io-client";
import { socketApi } from "../../../Utils/Api";

function ChatBox() {
  const Socket = io.connect(socketApi);
  const [chatLists, setChatLists] = useState([])
  const [chats,setChats] = useState([])
  const [userData,setUserData] = useState({})
  const [text,setText] = useState("")
  // const [sendMessage,setSendMessage] = useState(false)
  const [chatMessage,setChatMessage] = useState("")
  const chatContainerRef = useRef(null);

  const handleuserChat = async(id,image,fname,lname)=>{
    setUserData({id,image,fname,lname})
    const res = await userChats(id)
    if(res.data.message){
      setChats(res.data.userChats)
      scrollToBottom()
    }
  }

  const handleSendmessage = async()=>{
    // if (text.trim() !== '') {
    //   const newMessage = {
    //     user:userData.id,
    //     message: text,
    //     sender:"admin",
    //   };
    //   // Emit the message to the server
    //   await Socket.emit('send_message', newMessage);
    //   setSendMessage(!sendMessage)
    //   setText("");
    // }
    const res = await adminSendMessage(userData.id,text)

    if(res.data.message){
       setChatMessage(res.data.chatData)
       await Socket.emit('send_message', res.data.chatData);
       setText("")
    }
  }

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const getChatLists = async () => {
    const res = await chatListsData();
    if (res.data.message) {
      setChatLists(res.data.chatLists)
    }
  }

  useEffect(() => {
    // Listen for incoming messages from the server
     Socket.on('receive_message', (data) => {
      setChats((prevMessages) => [...prevMessages, data]);
    });
   scrollToBottom(); 
   return()=>{
    Socket.disconnect()
  }
  }, [chatMessage]);

  useEffect(() => {
    getChatLists()
  }, [chats])

  return (
    <div className="flex" >
      <div className="h-[37rem] bg--200 mt-5 rounded-bl rounded-tl w-[22rem] border">
        <div className="">
          <div className="px-3 py-2 text-black  bg-black-400">
            <p className="text-[25px] font-medium" style={{ fontFamily: 'Noto Serif' }}>Chats</p>
          </div>
          <div className="px-3 mt-2">
            <input
              placeholder="Search or start a new chat"
              className="outline-none border py-2 px-3 w-full rounded-[20px]"
              type="text"
            />
          </div>
          {chatLists.map((chat) => (
            <div className="pt-4">
             
            <div className="flex  h-[4rem] items-center px-3 hover:bg-gray-200 " onClick={()=>handleuserChat(chat._id,chat.userDetails.image,chat.userDetails.fname,chat.userDetails.lname)}>
              {chat.userDetails.image?<img
                className="h-[3rem] object-cover w-[3rem] rounded-full"
                src={chat.userDetails.image}
                alt=""
              />:<img
              className="h-[3rem] object-cover w-[3rem] rounded-full"
              src={`https://img.favpng.com/21/10/7/conservatorio-santa-cecilia-maulana-malik-ibrahim-state-islamic-university-malang-gold-lorem-ipsum-is-simply-dummy-text-of-the-printing-system-png-favpng-ZMuhDyyzHaHZjz8wE34CcysFR.jpg`}
              alt=""
            />}
              <div className="flex">
                <div className="mx-4 ">
                  <p className=" font-medium text-black w-[12rem]">{chat.userDetails.fname} {chat.userDetails.lname}</p>
                  <p className=" text-black text-[14px]">{chat.latestChat.message}</p>
                </div>
                <div className="">
                  <p className=" text-[14px] text-black hover:text-black font-medium">{chat.latestChat.time}</p>
                </div>
              </div>
            </div>
            </div>
          ))}



        </div>
      </div>
      {chats.length>0?
      <div className="h-[37rem] mt-5 rounded-br rounded-tr w-[55rem] border">
        <div className="flex justify-center">
          <div class="h-[37rem] flex flex-col w-[55rem] ">
            <div ref={chatContainerRef} class="bg-gray-100 flex-1 overflow-y-auto rounded-[5px]">
            <div class="flex items-center mb-2 h-[53px] px-4 bg-blue-900">
                  {userData.image?<img
                    class="w-8 h-8 rounded-full mr-2"
                    src={userData.image}
                    alt="User Avatar"
                  />:<img
                  class="w-8 h-8 rounded-full mr-2"
                  src={`https://img.favpng.com/21/10/7/conservatorio-santa-cecilia-maulana-malik-ibrahim-state-islamic-university-malang-gold-lorem-ipsum-is-simply-dummy-text-of-the-printing-system-png-favpng-ZMuhDyyzHaHZjz8wE34CcysFR.jpg`}

                  alt="User Avatar"
                />}
                  <div class="font-medium w-full text-white">{userData.fname} {userData.lname}</div>
                </div>
              <div class="px-4 py-2">
                
                {chats.map((chat) => (
                <div>
                  {chat.sender === 'user'?
                  <div class={`bg-white rounded-lg p-2 shadow mb-2 max-w-sm justify-between`}>
                    <p>{chat.message}</p>
                    <p className="text-end text-[10px]">{chat.time}</p>
                  </div>:
                    <div class={`flex items-center justify-end`}>
                    <div class="bg-blue-500 text-white rounded-lg p-2 mb-2 shadow mr-2 max-w-sm">
                    <p className="">{chat.message}</p>
                    <p className="text-end text-[10px] text-black">{chat.time}</p>
                    </div>

                  </div>}
                </div>
               ))}
              </div>
            </div>
            <div class="bg-gray-100  px-4 py-2">
              <div class="flex items-center">
                <input
                value={text}
                  class="w-full border outline-none mb-4 rounded-full py-2 px-4 mr-2"
                  type="text"
                  placeholder="Type your message..."
                  onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleSendmessage} class="bg-blue-500 mb-4  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>:<div className="flex items-center mb-36">
        <p className="text-center  mx-[25rem]">You can chat with the user here</p>
        </div>}
    </div>
  );
}

export default ChatBox;

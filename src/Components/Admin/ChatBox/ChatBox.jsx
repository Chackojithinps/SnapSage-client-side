import React, { useEffect, useState } from "react";
import { adminSendMessage, chatListsData, userChats } from "../../../Utils/AdminEndpoints";


function ChatBox() {
  const [chatLists, setChatLists] = useState([])
  const [chats,setChats] = useState([])
  // const [id,setId] = useState()
  const [userData,setUserData] = useState({})
  // const [image,setImage] = useState()
  // const [name,setName]= useState("")
  const [currentMessage,setCurrentMessage] = useState("")

  const handleuserChat = async(id,image,fname,lname)=>{
    // console.log("id : ",id)
    // setId(id)
    // setImage(image)
    setUserData({id,image,fname,lname})
    const res = await userChats(id)
    if(res.data.message){
      console.log("res.data.userChats",res.data.userChats)
      setChats(res.data.userChats)
    }
  }

  const handleSendmessage = async()=>{
    console.log("entered _______________________________________________")
    console.log(userData.id,currentMessage)
     const res= await adminSendMessage(userData.id,currentMessage)

  }
  const getChatLists = async () => {
    const res = await chatListsData();
    if (res.data.message) {
      console.log("res.data.chatLists : ", res.data.chatLists)
      setChatLists(res.data.chatLists)
    }
  }
 

  useEffect(() => {
    getChatLists()
  }, [])

  return (
    <div className="flex" >
      <div className="h-[37rem] bg-gray-800 mt-5 rounded-bl rounded-tl w-[22rem] border">
        <div className="">
          <div className="px-3 py-2 text-white  bg-black-400">
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
             
            <div className="flex  h-[4rem] items-center px-3 hover:bg-blue-400 " onClick={()=>handleuserChat(chat._id,chat.userDetails.image,chat.userDetails.fname,chat.userDetails.lname)}>
              <img
                className="h-[3rem] object-cover w-[3rem] rounded-full"
                src={chat.userDetails.image}
                alt=""
              />
              <div className="flex">
                <div className="mx-4 ">
                  <p className=" font-medium text-white w-[12rem]">{chat.userDetails.fname} {chat.userDetails.lname}</p>
                  <p className=" text-white text-[14px]">{chat.latestChat.message}</p>
                </div>
                <div className="">
                  <p className=" text-[14px] text-white hover:text-black font-medium">{chat.latestChat.time}</p>
                </div>
              </div>
            </div>
            </div>
          ))}



        </div>
      </div>
      
      <div className="h-[37rem] mt-5 rounded-br rounded-tr w-[55rem] border">
        <div className="flex justify-center">
          <div class="h-[37rem] flex flex-col w-[55rem] ">
            <div class="bg-gray-100 flex-1 overflow-y-auto rounded-[5px]">
            <div class="flex items-center mb-2 h-[53px] px-4 bg-blue-900">
                  <img
                    class="w-8 h-8 rounded-full mr-2"
                    src={userData.image}
                    alt="User Avatar"
                  />
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

                    {/* <img
                      class="w-8 h-8 rounded-full"
                      src="https://picsum.photos/50/50"
                      alt="User Avatar"
                    /> */}
                  </div>}
                </div>
               ))}
              </div>
            </div>
            <div class="bg-gray-100  px-4 py-2">
              <div class="flex items-center">
                <input
                  class="w-full border outline-none mb-4 rounded-full py-2 px-4 mr-2"
                  type="text"
                  placeholder="Type your message..."
                  onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button onClick={handleSendmessage} class="bg-blue-500 mb-4  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;

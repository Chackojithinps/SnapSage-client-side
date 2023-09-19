import React, { useEffect, useState } from "react";
import { chatListsData } from "../../../Utils/AdminEndpoints";


function ChatBox() {
  const [chatLists, setChatLists] = useState([])
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
      <div className="h-[37rem] mt-5 rounded-bl rounded-tl w-[22rem] border">
        <div className="  ">
          <div className="px-3 py-2 text-white bg-blue-400">
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
             
            <div className="flex  h-[4rem] items-center px-3 hover:bg-gray-300 ">
              <img
                className="h-[3rem] object-cover w-[3rem] rounded-full"
                src={chat.userDetails.image}
                alt=""
              />
              <div className="flex">
                <div className="mx-4 ">
                  <p className=" font-medium w-[12rem]">{chat.userDetails.fname} {chat.userDetails.lname}</p>
                  <p className="font text-gray-500">{chat.latestChat.message}</p>
                </div>
                <div className="">
                  <p className=" text-[14px]">{chat.latestChat.time}</p>
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
              <div class="px-4 py-2">
                <div class="flex items-center mb-2">
                  <img
                    class="w-8 h-8 rounded-full mr-2"
                    src="https://picsum.photos/50/50"
                    alt="User Avatar"
                  />
                  <div class="font-medium">John Doe</div>
                </div>
                {/* {messageList.map((item) => ( */}
                <div>
                  <div class={`bg-white rounded-lg p-2 shadow mb-2 max-w-sm`}>
                    hello
                  </div>

                  <div class={`flex items-center justify-end`}>
                    <div class="bg-blue-500 text-white rounded-lg p-2 mb-2 shadow mr-2 max-w-sm">
                      {/* {item.message} */}
                    </div>

                    <img
                      class="w-8 h-8 rounded-full"
                      src="https://picsum.photos/50/50"
                      alt="User Avatar"
                    />
                  </div>
                </div>
                {/* ))} */}
              </div>
            </div>
            <div class="bg-gray-100  px-4 py-2">
              <div class="flex items-center">
                <input
                  class="w-full border outline-none mb-4 rounded-full py-2 px-4 mr-2"
                  type="text"
                  placeholder="Type your message..."
                //   onChange={(e) => setCurrentMessage(e.target.value)}
                />
                <button class="bg-blue-500 mb-4  hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
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

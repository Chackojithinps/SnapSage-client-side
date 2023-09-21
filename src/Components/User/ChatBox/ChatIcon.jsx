import React, { useEffect, useRef, useState } from "react";

import ChatIcon from "@mui/icons-material/Chat";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { getChatData, userSendMessage } from "../../../Utils/UserEndpoints";

function ChatIcon1() {
    
    const [chatopen, setChatopen] = useState(false);
    const [chat,setChat] = useState([])
    const [text,setText] = useState("")
    const [sendMessage,setSendMessage]= useState(false)
    const chatContainerRef = useRef(null);

    const handleSendmessage=async()=>{
        console.log("entered submission : ",text)
        const res = await userSendMessage(text)
        if(res.data.message){

            setSendMessage(!sendMessage)
            setText("")
        }
    }
    const getChat =async()=>{
         const res = await getChatData()
         if(res.data.message){

            setChat(res.data.messageData)
            // scrollToBottom();

         }
    } 
    const handleChatData = ()=>{
        setChatopen(!chatopen)
        
    }
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
      };

      

    useEffect( ()=>{
       getChat()
       scrollToBottom(); 
    },[chatopen,sendMessage])
    return (
        <div className="fixed right-10 cursor-pointer  bg-white-500 rounded full top-[42rem]">
            {chatopen ? (
                <div
                    className="border-gray-500 fixed right-[0rem] top-[0rem] bg-white  h-[47rem] w-[25rem]"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                    <div className="flex h-[4rem] items-center px-4 bg-red-500 justify-between">
                        <p className="font-medium text-[25px] text-white ">Chat</p>
                        <DisabledByDefaultRoundedIcon className="me-0" style={{color:"white"}} onClick={handleChatData}/>
                    </div>
                    <div className="px-5 flex mt-10 items-center justify-center">
                        <p className="text-center ">
                            WeddingWire Support WeddingWire has thousands of venues and
                            wedding professionals to choose from with pricing, reviews and
                            more. I'd like to help you choose the ones that best fit your
                            dream wedding. You can tell me a bit about what you are looking
                            for or you can also call us on 991-050-2284 and talk to a wedding
                            expert for free.
                        </p>
                    </div>
                    <div className="w-full mt-10 bg-gray-200 h-3">

                    </div>
                    <div  ref={chatContainerRef} className="flex flex-col h-[22rem]  overflow-y-scroll">
                        <div className="text-center w-full mt-5 text-gray-500 text-[15px]">
                            {/* <p className="text-center">23/05/2023</p> */}
                        </div>

                        {chat.map((chat)=>(
                         <div>
                         {chat.sender === 'admin'?
                        <div className="flex flex-col mt-5 px-2">
                            <div className="flex">
                                <img src="https://www.weddingwire.in/assets/img/chatbot/avatar.png" alt="" className="border border-red-500 h-[3rem] w-[3rem] rounded-full" />
                                <p className="py-3 bg-blue-00 px-3 text-[15px] mx-3 border-2 rounded-[6px] max-w-[18rem]">{chat.message}</p>
                            </div>
                            <p className="ms-16 text-[13px] mt-1">{chat.time}</p>
                        </div>:
                        <div className="flex justify-end mt-5 px-2">
                            <div className="flex flex-col ">
                                <p className="py-3 bg-gray-200 px-3 text-[15px] mx-3 border-2 rounded-[6px] max-w-[18rem]">{chat.message}</p>
                                <p className="text-right me-5 text-[13px] mt-1">{chat.time}</p>

                            </div>
                            <img src={chat.user.image} alt="" className=" h-[3rem] w-[3rem] rounded-full" />

                        </div>}
                         </div>
                        ))} 
                     
                    </div>

                    <div className="border flex justify-between items-center mt-3 w-full border-gray-300">
                        <input type="text" value={text} className="outline-none py-4 px-3" placeholder="Write your message ..."  onChange={(e)=>setText(e.target.value)}/>
                        <SendRoundedIcon style={{fontSize:"35px",marginRight:"10px",background:"",color:"red"}} onClick={handleSendmessage}/>
                    </div>
                    {/* <div className="flex">
                <div className="mx-4 ">
                  <p className=" font-medium text-white w-[12rem]">Hello</p>
                  <p className=" text-white text-[14px]">13:13</p>
                </div>
                <div className="">
                  <p className=" text-[14px] text-white hover:text-black font-medium">12:09</p>
                </div>
              </div> */}
                </div>
            ) : (
                <div className="border-gray-500 fixed right-[-200rem] top-[6rem] bg-gray-500  h-[40rem] w-[20rem]">
                    <p className="">Chat</p>
                </div>
            )}

            {!chatopen && (
                <div className="border w-[3rem] h-[3rem] flex items-center justify-center rounded-full ">
                    <ChatIcon
                        style={{ color: "red", fontSize: "3rem" }}
                        onClick={() => setChatopen(!chatopen)}
                    />
                </div>
            )}
        </div>
    );
}

export default ChatIcon1;

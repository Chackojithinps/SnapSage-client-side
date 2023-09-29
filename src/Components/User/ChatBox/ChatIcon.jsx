import React, { useEffect, useRef, useState } from "react";

import ChatIcon from "@mui/icons-material/Chat";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { getChatData } from "../../../Utils/UserEndpoints";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { io } from "socket.io-client";
import { socketApi } from "../../../Utils/Api";

function ChatIcon1({userDetails}) {
    const Socket = io.connect(socketApi);
    const [chatopen, setChatopen] = useState(false);
    const [chat,setChat] = useState([])
    const [chats,setChats] = useState(false)
    const [text,setText] = useState("")
    const [sendMessage,setSendMessage]= useState(false)

    const chatContainerRef = useRef(null);
    
    const handleSendmessage=async()=>{
        if (text.trim() !== '') {
            const newMessage = {
              user:userDetails._id,
              message: text,
              sender:"user",
            };
            // Emit the message to the server
            await Socket.emit('send_message', newMessage);
            // Clear the input field
            setSendMessage(!sendMessage)
            setText('');
          }
    }

    const getChat =async()=>{
         const res = await getChatData()
         if(res.data.message){
            setChat(res.data.messageData)
         }
    } 

    const handleClickchat =async()=>{
        setChats(!chats)
        setChatopen(!chatopen)
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
    },[chat,sendMessage])

    useEffect(() => {
        // Listen for incoming messages from the server
         Socket.on('receive_message', (data) => {
          setChat((prevMessages) => [...prevMessages, data]);
        });
       scrollToBottom(); 
       return()=>{
        Socket.disconnect()
      }
      }, [chat,sendMessage]);
    return (
        <div className="fixed right-10 cursor-pointer bg-white-500 rounded full top-[40rem]">
            {chatopen ? (
                <div
                    className="border-gray-500 fixed right-[0rem] top-[0rem] bg-white h-[47rem] w-[25rem]"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
                >
                    <div className="flex h-[3rem] items-center px-4 bg-red-500 justify-between">
                        <p className="font-medium text-[25px] text-white ">Chat</p>
                        <DisabledByDefaultRoundedIcon className="me-0" style={{color:"white"}} onClick={handleChatData}/>
                    </div>
                    <div className="px-5 flex flex-col py-4 items-center justify-center">
                        <div className="flex gap-2">
                            <p className="font-bold">Snapsage Support</p>
                            <SupportAgentIcon/>
                        </div>
                        <p className="text-center mt-3" style={{fontFamily:'sans-serif'}}>
                            SnapSage has thousands of venues and
                            Photography professionals to choose from with pricing, reviews and
                            more. I'd like to help you choose the ones that best fit your
                            dream Photograhy. You can tell me a bit about what you are looking
                            for or you can also call us on 991-050-2284 and talk to a wedding
                            expert for free.
                        </p>
                    </div>
                    <div className="w-full mt-10 bg-gray-200 h-3">

                    </div>
                    <div  ref={chatContainerRef} className="flex flex-col h-[22rem]  overflow-y-scroll">
                        <div className="text-center w-full mt-5 text-gray-500 text-[15px]">
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
                            <img src={userDetails.image} alt="" className=" h-[3rem] w-[3rem] rounded-full" />

                        </div>}
                         </div>
                        ))} 
                     
                    </div>

                    <div className="border flex justify-between items-center  w-full border-gray-300">
                        <input type="text" value={text} className="outline-none py-3  px-3" placeholder="Write your message ..."  onChange={(e)=>setText(e.target.value)}/>
                        <SendRoundedIcon style={{fontSize:"35px",marginRight:"10px",background:"",color:"red"}} onClick={handleSendmessage}/>
                    </div>
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
                        onClick={handleClickchat }
                    />
                </div>
            )}
        </div>
    );
}

export default ChatIcon1;

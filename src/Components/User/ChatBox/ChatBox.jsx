// import React, { useEffect, useState } from "react";
// import { socketApi } from "../../../Utils/Api";
// import { io } from "socket.io-client";
// import { getChat } from "../../../Utils/UserEndpoints";
// const socket = io.connect(socketApi);

// function ChatBox({ userDetails }) {
//   console.log("userDetails in chatebox: ", userDetails);
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [messageList, setMessageList] = useState([]);
//   console.log("messageList : : : ", messageList);
//   const sendMessage = async () => {
//     if (currentMessage !== "") {
//       const messageData = {
//         author: userDetails.fname,
//         message: currentMessage,
//         time:
//           new Date(Date.now()).getHours() +
//           ":" +
//           new Date(Date.now()).getMinutes(),
//       };

//       await socket.emit("send_message", messageData);
//       setMessageList((list) => [...list, messageData]);
//     }
//   };
//   const getMessage = async (req, res) => {
//     try {
//       const res = await getChat();
//       if (res.data.message) {
//         console.log("message of chat : ", res.data.messageData);

//         setMessageList(res.data.messageData);
//       }
//     } catch (error) {
//       console.log("error : ", error.message);
//     }
//   };
//   useEffect(() => {
//     // socket.on("receive_message", (data) => {
//     //     console.log(data)
//     //     setMessageList((list)=>[...list,data])
//     // })
//     getMessage();
//   }, [socket]);
//   return (
//     // <div>

//     <div className="flex justify-center">
//       <div class="h-[40rem] flex flex-col w-[50rem] mt-5  ">
//         <div class="bg-gray-100 flex-1 overflow-y-auto rounded-[5px]">
//           <div class="px-4 py-2">
//             <div class="flex items-center mb-2">
//               <img
//                 class="w-8 h-8 rounded-full mr-2"
//                 src="https://picsum.photos/50/50"
//                 alt="User Avatar"
//               />
//               <div class="font-medium">John Doe</div>
//             </div>
//             {messageList.map((item) => (
//               <div>
                
//                 <div class={`bg-white rounded-lg p-2 shadow mb-2 max-w-sm`}>
//                   hello
//                 </div>
                
//                 <div class={`flex items-center justify-end`}>
//                   <div class="bg-blue-500 text-white rounded-lg p-2 mb-2 shadow mr-2 max-w-sm">
//                     {item.message}
//                   </div>

//                   <img
//                     class="w-8 h-8 rounded-full"
//                     src="https://picsum.photos/50/50"
//                     alt="User Avatar"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div class="bg-gray-100 px-4 py-2">
//           <div class="flex items-center">
//             <input
//               class="w-full border rounded-full py-2 px-4 mr-2"
//               type="text"
//               placeholder="Type your message..."
//               onChange={(e) => setCurrentMessage(e.target.value)}
//             />
//             <button
//               class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
//               onClick={sendMessage}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// {
//   /* <p>INbox</p>
//        <input type='text' className='border border-gray-400' onChange={(e)=>setCurrentMessage(e.target.value)}/>
//        <button className='py-2 px-2 bg-red-300 mx-5' onClick={sendMessage}>Submit</button> */
// }
// {
//   /* </div> */
// }

// export default ChatBox;

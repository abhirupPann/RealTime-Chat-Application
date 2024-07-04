import React, { useEffect, useState } from 'react'
import { messagesState, selectedConvoState } from '../../recoil/useConversation'
import { useRecoilState } from 'recoil';
import { useSocketContext } from '../../context/SocketContext';
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';

function Convo(props) {
  const [selectedConvo, setSelectedConvo]=useRecoilState(selectedConvoState) ;
  const isSelected = selectedConvo?._id === props.conversation._id ;
  const {onlineUsers} = useSocketContext();
  const [time, setTime] = useState("");

  // console.log(onlineUsers)
  const isOnline = onlineUsers.includes(props.conversation._id);

  useEffect(()=>{
    setTime(  extractTime(props.conversation.updatedAt));
  
  },[selectedConvo]) 
  // for (const message of messages){
  //   if(props.conversation.messages[props.conversation.messages.length - 1] === message._id){
  //     if(message.senderId !== authUser){
  //        txt = message.message;     
  //        time = extractTime(message.createdAt);
  //     }
  //   }
  // }
   

  return (
    <div className={`flex justify-between pt-5 border-b-2 pb-5 cursor-pointer  ${isSelected ? "bg-gray-300" : ""} px-3`} onClick={()=>{setSelectedConvo(props.conversation)}}>
        <div className="flex gap-3 relative ">         
            <img src={props.profilePicture} alt="" width={50}/>
            {isOnline && <div className='absolute bg-green-500 w-3 h-3 rounded-full top-[9vh] right-[10vw]'></div>}
            
         <div>
            <div className=' font-bold mb-2'>{props.name}</div>
            
         </div></div>

         <div className=' text-sm text-gray-500'>{time}</div>
         

    </div>
  )
}

export default Convo

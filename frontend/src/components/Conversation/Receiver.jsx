import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
function Receiver() {
  const {authUser} = useAuthContext();
  return (
    <div>
        <div className="chat chat-end">
    <div className="chat-image avatar">
        <div className="w-10 rounded-full">
        <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <div className="chat-header flex justify-between">
        {authUser.fullName}
        <time className="text-xs opacity-50 ml-[4.8vw]">12:46</time>
    </div>
    <div className="chat-bubble max-w-[25vw]">I hate you!</div>
    </div>
    </div>
  )
}

export default Receiver

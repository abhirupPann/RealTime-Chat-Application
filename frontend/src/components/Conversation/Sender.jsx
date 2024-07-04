import React from 'react'
import { useRecoilValue } from 'recoil'
import { selectedConvoState } from '../../recoil/useConversation'

function Sender() {
  const selectedConvo = useRecoilValue(selectedConvoState);
  return (
    <div className=''>
        <div className="chat chat-start">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div className="chat-heade">
            {selectedConvo.fullName}
            <time className="text-xs opacity-50 ml-[4.8vw]">12:45</time>
        </div>
        <div className="chat-bubble max-w-[25vw]">You were the Chosen One!</div>
        </div>
    </div>
  )
}

export default Sender

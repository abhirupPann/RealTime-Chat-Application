import React from 'react'
import { useRecoilValue } from 'recoil'
import { selectedConvoState } from '../../recoil/useConversation'
function Heading() {
  const selectedConvo = useRecoilValue(selectedConvoState);
  return (
    <div className='m-5 p-5 flex gap-3 bg-gray-300'>
      
      <div className="chat-image avatar">
            <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
      <div className=' font-bold'>{selectedConvo.fullName}</div>
    </div>
  )
}

export default Heading

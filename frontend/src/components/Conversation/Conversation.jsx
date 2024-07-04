import React, { useEffect } from 'react'
import Heading from './Heading'
import Typing from './Typing'
import Sender from './Sender'
import Receiver from './Receiver'
import { useAuthContext } from '../../context/AuthContext'
import { useRecoilState } from 'recoil'
import { selectedConvoState } from '../../recoil/useConversation'
import useGetMessages from '../../hooks/useGetMessages'
import Messages from './Messages'

function Conversation() {
  const {authUser} = useAuthContext();

  const [selectedConvo, setSelectedConvo] = useRecoilState(selectedConvoState);
  const {messages, loading} = useGetMessages();
  console.log(messages)
  useEffect(()=>{
    return () => setSelectedConvo(null);
  },[setSelectedConvo])
  return (
    <div className='h-screen flex-col justify-between w-[100%]'>
      {selectedConvo ? 
      <div className='h-screen'>
      <Heading/>
      <div className='h-[74vh] overflow-y-scroll mx-5 px-10'>
        <Messages/>
    </div>
    <Typing/>
    </div> :
      <div className='h-full overflow-y-scroll mx-5 px-10 flex items-center justify-center gap-4 text-3xl border-4'>

      <div className=''>Welcome back :)</div>
      <div className=' font-bold'>{authUser.fullName}</div>
      </div> 
      }

    </div>
  )
}

export default Conversation


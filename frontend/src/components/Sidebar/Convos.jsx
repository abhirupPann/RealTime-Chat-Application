import React from 'react'
import Convo from './Convo'
import useGetConversations from '../../hooks/useGetConversations'


function Convos() {

  const {loading, conversations} = useGetConversations();
  return (
    <div className=' flex flex-col h-full overflow-y-scroll pb-[10vh]'>
      <ul>
      {conversations.map((convo)=>(
        <li key={convo._id}><Convo name={convo.fullName} profilePicture={convo.profilePicture} conversation={convo}/></li>
        
       ))}
       {loading ? <span className='loading loading-spinner mx-auto'></span>: null}
       
      </ul>
      
    </div>
  )
}

export default Convos

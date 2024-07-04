import React from 'react'
import Sidebar from "../components/Sidebar/Sidebar"
import Conversation from '../components/Conversation/Conversation'
function Home() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar/>
      <Conversation/>
    </div>
  )
}

export default Home

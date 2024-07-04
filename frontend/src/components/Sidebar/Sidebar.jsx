import React from 'react'
import SearchBar from './SearchBar'
import Convos from './Convos'
import Logout from './Logout'
function Sidebar() {
  return (
    <div className=' flex gap-5  h-screen px-5 pt-5 overflow-hidden w-[35vw]'>
        <div className=' flex flex-col h-full justify-end bg-gray-200'>
            <Logout/>
        </div>
        <div>
        <SearchBar/>
        <Convos/>
        </div>

       
    </div>
  )
}

export default Sidebar

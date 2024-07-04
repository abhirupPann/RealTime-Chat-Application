import React from 'react'
import { FiLogOut } from "react-icons/fi";
import useLogout from '../../hooks/useLogOut';
function Logout() {
  const {loading, logout}= useLogout();
  return (
    <div className='p-5 cursor-pointer focus:bg-gray-300' tabIndex={0}>
      <FiLogOut onClick={logout}/>
    </div>
  )
}

export default Logout

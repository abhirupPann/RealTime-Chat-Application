import React from 'react'
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import useSendMessage from '../../hooks/useSendMessages';
function Typing() {
  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

  return (
    <form className=' m-5 flex items-center gap-3 justify-between' onSubmit={(e)=>{handleSubmit(e)}}>
      <input type="text" placeholder="Type here" className="input input-bordered w-[65vw] " value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
      <button className=' w-[5vw] h-[6vh] flex items-center justify-center rounded-md bg-gray-400 cursor-pointer' >
      {loading ? <div className='loading loading-spinner'></div> : <FiSend/>}
      </button>
    </form>
  )
}

export default Typing

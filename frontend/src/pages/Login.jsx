import React, { useState } from 'react'
import image from "../assets/2992779.jpg"
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogIn';
function Login() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const {loading, login} = useLogin();
  const handleOnSubmit=async (e)=>{
    e.preventDefault();
    
    await login(email, username, password);
  }
  return (
    <div className=' w-full h-screen m-[2rem] flex justify-center overflow-hidden'>
        <div className="login mt-[12vh] flex flex-col items-center">
            <h1 className=' text-3xl font-semibold mb-[2vh] text-[#ef515d]'>Welcome back!</h1>
            <p className=' mb-[5vh]'> Simplify your messaging experience with <span className=' font-semibold'>YourMessage.</span> Get started for free.</p>
            <form action="" className='flex flex-col gap-5 items-center overflow-hidden' onSubmit={(e)=>{handleOnSubmit(e)}}>
            <input type="text" placeholder='Email' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw] ' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="text" placeholder='Usename' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw] ' onChange={(e)=>{setUsername(e.target.value)}}/>
                <input type="password" placeholder='Password' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw]' onChange={(e)=>{setPassword(e.target.value)}}/>
                <p className=' ml-[16vw]'>Forgot Password?</p>
                <button type="submit" className=' rounded-full w-[10vw] h-[5vh] px-[2vw] bg-[#000000] text-white mt-[10vh]' disabled={loading}>{loading ? <span className='loading loading-spinner '></span> : "Login"}</button>
                <div>Not a member? <Link to="/signup" className=' text-[#ef515d] hover:underline'>Register Now.</Link></div>
            </form>
        </div>
        <div className="image invisible md:visible"><img src={image} alt="" className='h-screen'/></div>
    </div>
  )
}

export default Login

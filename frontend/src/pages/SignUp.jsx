import React, { useState } from 'react'
import image from "../assets/3156814.jpg"
import { Link } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp'
import useLogout from '../hooks/useLogOut'

function SignUp() {

    const [inputs, setInputs] = useState({
        Email: "",
        FullName: "",
        UserName: "",
        Password: "",
        ConfirmPassword: "",
        Gender: ""
    })
    
    const [loading, signup] = useSignUp();
    const handleGender = (gender)=>{
        setInputs({...inputs, Gender: gender})
    }    
    const handleOnsubmit = async(e)=>{
        e.preventDefault();
        await signup(inputs)
        
    }
  return (
    <div className=' w-full h-screen m-[2rem] flex justify-center overflow-hidden'>
       
    <div className="login mt-[12vh] flex flex-col items-center">
        <h1 className=' text-3xl font-semibold mb-[2vh] text-[#ef515d]'>Join Our Network!</h1>
        <p className=' mb-[5vh]'> Simplify your messaging experience with <span className=' font-semibold'>YourMessage.</span> Get started for free.</p>
        <form action="" className='flex flex-col gap-5 items-center overflow-hidden' onSubmit={(e)=>{handleOnsubmit(e)}}>
            <input type="text" placeholder='Email' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw] ' value={inputs.Email} onChange={(e)=>{setInputs({...inputs, Email: e.target.value})}}/>
            <input type="text" placeholder='Full Name' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw] ' value={inputs.FullName} onChange={(e)=>{setInputs({...inputs, FullName: e.target.value})}}/>
            <input type="text" placeholder='User Name' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw] ' value={inputs.UserName} onChange={(e)=>{setInputs({...inputs, UserName: e.target.value})}}/>
            <input type="password" placeholder='Password' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw]' value={inputs.Password} onChange={(e)=>{setInputs({...inputs, Password: e.target.value})}}/>
            <input type="password" placeholder='Confirm Password' className=' border border-[#395a64] rounded-full w-[25vw] h-[5vh] px-[2vw]' value={inputs.ConfirmPassword} onChange={(e)=>{setInputs({...inputs, ConfirmPassword: e.target.value})}}/>
            <div className=" flex justify-between">
            <label className="label cursor-pointer">
                <span className="label-text mr-2">Male</span> 
                <input type="checkbox"  className="checkbox checkbox-primary" checked={inputs.Gender === "male"} onChnage={()=>{handleGender("male")}}/>
            </label>
            <label className="label cursor-pointer">
                <span className="label-text mr-2">Female</span> 
                <input type="checkbox"  className="checkbox checkbox-primary" checked={inputs.Gender === "female"} onChange={()=>{handleGender("female")}}/>
            </label>
            </div>
            <button type="submit" className=' rounded-full w-[10vw] h-[5vh] px-[2vw] bg-[#000000] text-white mt-[10vh]' 
            disabled={loading}

            >{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}</button>
            <div>Already a member? <Link to="/login" className=' text-[#ef515d] hover:underline'>Log In.</Link></div>
            
        </form>
    </div>
    <div className="image invisible md:visible"><img src={image} alt="" className='h-screen'/></div>
</div>
  )
}

export default SignUp

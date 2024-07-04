import  { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';
function useSignUp() {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext();
    const signup = async ({Email,FullName, UserName, Password,ConfirmPassword,Gender})=>{
        const success = handleInputErrors({Email,FullName, UserName, Password,ConfirmPassword,Gender});
        if(!success) {
          console.log("There is an error!!")
          return;
        }
        
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
       
				body: JSON.stringify({email: Email,fullName:FullName, userName:UserName, password: Password, confirmPassword:ConfirmPassword, gender: Gender}),
			});

			const data = await res.json();
            if(data.error){
              throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data)); //storing in the local storage
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(true)
        }
    }
    return [ loading, signup ];
}

export default useSignUp

function handleInputErrors({Email,FullName, UserName, Password,ConfirmPassword,Gender}){
      if(!Email || !FullName || !UserName || !Password || !ConfirmPassword){
        toast.error("Please fill in all fields!");
        return false
      }if(Password !== ConfirmPassword){
        toast.error("Passwords doesn't match!");
        return false
      }if(Password.length < 6){
        toast.error("Password must be atleast 6 characters!");
        return false
      }

      toast.success("Successfully Signed Up!");
      return true
}
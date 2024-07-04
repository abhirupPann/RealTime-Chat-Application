import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createTokenandCookie from "../utils/jsonToken.js";
export const signup=async(req,res)=>{
    try{
        const {fullName, userName, password, confirmPassword, email, gender} = req.body;
        
        if(password !== confirmPassword){
            return res.status(400).json({
                error: "The passwords doesn't match"
            })
        }
        
    
        //checking if user already exists
        let user = await User.findOne({userName: userName});
        if(user){
            return res.status(409).json({
                error: "The user already exists"
            }) // the code after this will not execute but when return is not given the code after that will execute even after giving a response.
        }
       

        //hashed password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //profilePic
        const firstname = fullName.split(" ")[0];
        const lastname = fullName.split(" ")[1];
        const profilePicture = `https://avatar.iran.liara.run/username?username=${firstname}+${lastname}`
    
    
        const newUser = new User({ //why can't we use User.create()
            fullName,
            userName,
            password: hashedPassword,
            email,
            gender,
            profilePicture
        })
        if(newUser){
            createTokenandCookie(newUser._id, res)
            await newUser.save();
            res.status(200).json({
                msg: "User Created Successfully!",
                userId: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                email: newUser.email,
                password: newUser.password
            })
        }else{
            res.status(400).json({
                error: "Invalid User Input!"
            })
        }

    }catch(err){
        console.log(`Error Message: ${err.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }

}


export const login=async(req, res)=>{
    try{
        const {email, userName, password} = req.body;
        let user
        email ? user = await User.findOne({email}) : user= await User.findOne({userName})

        const isPassword = await bcrypt.compare(password, user?.password || "");
        

        if(!user || !isPassword){
            return res.json({error: "Invalid credentials!"})
        }
        createTokenandCookie(user._id, res)

       
        res.status(200).json({
            userId: user._id,
            userName: user.userName,
            fullName: user.fullName,
            profilePicture: user.profilePicture
        })
    }catch(err){
        console.log(`Error Message: ${err.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const logout=(req,res)=>{
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({
            msg: "User Logged Out Successfully"
        })
    } catch (error) {
        console.log(`Error Message: ${err.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}




import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectUser = async(req,res, next)=>{
      try {
        const token = req.cookies.JWT;
        if(!token){
            return res.status(400).json({
                error: "Ivalid credentials."
            })
        }
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
    
        if(!decode){
            return res.status(400).json({
                error: "Ivalid credentials."
            })
        }

        const user = await User.findById(decode.userId).select("-password"); //excluding the password

        if(!user){
            return res.status(400).json({
                error: "Ivalid credentials."
            })
        }

        req.user = user;
        next();
      } catch (err) {
        console.log(`Error Message: ${err.message}`);
        res.status(500).json({
            error: "Internal Server Error"
        })
      }
}

export default protectUser;
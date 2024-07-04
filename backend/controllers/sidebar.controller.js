import User from "../models/user.model.js";

export const sideBarUser =  async (req, res)=>{
      try {
        const loggedInUser = req.user._id;
        
        const allUser = await User.find({ _id:{ $ne: loggedInUser}}).select("-password") //this will exclude the loggedInUser and the passwords will also be excluded

        res.status(200).json(allUser)
      } catch (err) {
        console.log(`Error Message: ${err.message}`)
        res.status(500).json({
            error: "Internal Server Error"
        })
      }
}


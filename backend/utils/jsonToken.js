import jwt from "jsonwebtoken";


const createTokenandCookie = (userId, res)=>{
      const token = jwt.sign({userId}, process.env.JWT_TOKEN,{
        expiresIn: "15d"
      });

      res.cookie("JWT", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: true, // prevent XSS attacks cross-site scripting attacks, only accessible via http protocol and not by javascript
		sameSite: "strict", // CSRF attacks cross-site request forgery attacks
		secure: process.env.NODE_ENV !== "development",
      })
      
}


export default createTokenandCookie
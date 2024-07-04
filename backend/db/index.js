import mongoose from "mongoose";
// import dotenv from "dotenv"

// dotenv.config();
// const url = process.env.DB_URI; !!we cannot use the url like this, it will throw error

const  mongooseDBconnect = async()=>{
    try{
       await mongoose.connect(process.env.DB_URI);
       console.log("Connected to MongoDB")
    }catch(err){
        console.log(`Error Message: ${err.message}`)
    }
}

export default mongooseDBconnect;


import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("Connected to MongoDB")


    }catch(err){
        console.log("DB Connection err", err)
        process.exit(1);
    }
}

export default connectDB
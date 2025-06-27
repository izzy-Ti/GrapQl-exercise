import mongoose from 'mongoose'
import dotenv  from 'dotenv'
dotenv.config()


const MONGOBD_URI =process.env.MONGODB_URL  

export const connectDB = async () =>{
    await mongoose.connect(MONGOBD_URI).then(()=>{
        console.log(`Database connected`);
    })
}
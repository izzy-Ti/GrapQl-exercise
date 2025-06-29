import mongoose from 'mongoose'
import dotenv  from 'dotenv'
dotenv.config()


const MONGOBD_URI ='mongodb+srv://israel:0911700417@graphql.kdzep8m.mongodb.net/graphql'  

export const connectDB = async () =>{
    await mongoose.connect(MONGOBD_URI).then(()=>{
        console.log(`Database connected`);
    })
}
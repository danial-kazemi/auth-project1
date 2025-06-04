import mongoose from "mongoose";
export default async function mongoConnect() {
    const MONGO_URI = process.env.MONGODB_URI;    
        if(!MONGO_URI) {
            throw new Error('Please define MONGO_URI enviroment variable insile .env')
        }
    if (mongoose.connections[0].readyState !== 1) {
     try {
        await mongoose.connect(MONGO_URI);        
        console.log("db is connected!");        
     } catch (error) {
        console.log(error);
        throw(error)        
     }
    }   
}


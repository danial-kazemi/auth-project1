import mongoose from "mongoose";
export default async function connect() {
    const MONGO_URI = process.env.MONGODB_URI;    
        if(!MONGO_URI) {
            throw new Error('Please define MONGO_URI enviroment variable insile .env.local')
            process.exit(1)
        }
    if (mongoose.connections[0].readyState !== 1) {
     try {
        await mongoose.connect(MONGO_URI);        
        console.log("Successfully connected to mongoDB");        
     } catch (error: any) {        
        throw new Error(error)        
     }
    }   
}

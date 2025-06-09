"use server"
import db from "../db";
import User from "@/app/models/users";

const register = async (formData: FormData) => {
    try{
        const firstName = formData.get('firstName') as string;        
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;        
        const data = {
            firstName,
            lastName,            
            email,
            password,
            createdAt : new Date(),
        }

        await db.connect();
        const newUser = new User(data);
        await newUser.save();
// const Tank = mongoose.model('Tank', yourSchema);
// const small = new Tank({ size: 'small' });
// await small.save();
// // or
// await Tank.create({ size: 'small' });
// // or, for inserting large batches of documents
// await Tank.insertMany([{ size: 'small' }]);    
    }catch(error: any){
        throw new Error(error);
    }
}

export {register};
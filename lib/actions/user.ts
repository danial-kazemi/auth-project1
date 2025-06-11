"use server"
import { redirect } from "next/navigation";
import db from "../db";
import User from "@/app/models/users";
import {hash} from "bcryptjs"

const register = async (formData: FormData) => {    
    try{
        const firstName = formData.get('firstName') as string;        
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        
        const data = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.toLowerCase().trim(),
            password,
            createdAt: Date.now()
        }     
        
        if(!firstName || !lastName || !email || !password) throw new Error('Please enter all necessery filds.')        
        await db.connect();
        const exsistingUser = await User.findOne({email});
        if(exsistingUser) throw new Error('User already exsist!');
        const hashedPassword = await hash(password,12);
        const secureData = {...data, password: hashedPassword}
        User.create(secureData);
        console.log('user created successfully!'); 
        redirect("/login")          
        // const newUser = new User(data);
        // await newUser.save();
// const Tank = mongoose.model('Tank', yourSchema);
// const small = new Tank({ size: 'small' });
// await small.save();
// // or
// await Tank.create({ size: 'small' });
// // or, for inserting large batches of documents
// await Tank.insertMany([{ size: 'small' }]);    
    }catch(error: any){
       console.log(error.message);
       
    }
}

export {register};
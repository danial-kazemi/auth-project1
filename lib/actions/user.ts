"use server"
import { redirect } from "next/navigation";
import db from "../db";
import User from "@/app/models/users";
import bcrypt, {hash} from "bcryptjs"
import { CgPushChevronLeftR } from "react-icons/cg";
import { CredentialsSignin } from "next-auth";
import { signIn, signOut } from "@/auth";

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
        await User.create(secureData);
        console.log('user created successfully!'); 
             
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
    redirect("/login") ;   
}

const login = async (formData: FormData) => {

    try {   
        const email = formData.get('email') as string;
         const password = formData.get('password') as string;    
        await db.connect();
        const user = await User.findOne({email});
        if(!user) throw new Error('Email is not valid');       
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) throw new Error('Password is not correct');
         if(!user.isActive) throw new Error('User is not active!')
        const userData = {
          _id: user._id,
          firsname: user.firsname,
          lastname: user.lastname,
          email: user.email,
          isActive: user.isActive,
          image_url: user.image_url,
          role: user.role,
          createdAt: user.createdAt,
        }
        console.log("Welcome!");       

        await signIn('credentials',{
            redirect: false,
            callbackUrl:"/",           
            email,
            password
        })       
        

    } catch(error) {
        const someError = error as CredentialsSignin
        console.log(someError.message);      
    }
    redirect("/dashboard") 
       
}

const githubSignIn = async () => {
    await signIn("github", {
        redirectTo: "/dashboard"
    })
};
const googleSignIn = async () => {
    await signIn("google", {
        redirectTo: "/dashboard"
    })
};

const logOut = async () => {
    await signOut( {
        redirectTo: "/dashboard"
    })
};

export {register, login, logOut, githubSignIn, googleSignIn};
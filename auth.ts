import NextAuth, { CredentialsSignin } from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import db from "./lib/db";
import User from "./app/models/users";
import bcrypt from "bcryptjs";

export const {auth, handlers, signIn, signOut} = NextAuth({
    // session: {
    //     strategy: 'jwt'
    // },
    providers: [
        Credentials({ 
      credentials: {
        email: {label: "Email", type: 'email', placeholder: "mack@tyler.com"},
        password: {label: 'Password', type: 'password', placeholder: 'Abcd1234$@'},
      },
      authorize: async (credentials) => {        
        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined    
        if(!email || !password) throw new CredentialsSignin("Please provide both email and password!");     
        db.connect();
        const user = await User.findOne({email});        
        if(!user) throw new Error("Please enter valid email & password");
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) throw new Error("Please enter valid email & password")  
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
                     
        return userData;
      },
    }),
        GitHub
    ],
    pages: {
      signIn: "/login"
    }
})
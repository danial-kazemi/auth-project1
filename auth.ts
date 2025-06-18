import NextAuth, { CredentialsSignin } from "next-auth";

import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import db from "./lib/db";
import User from "./app/models/users";
import bcrypt from "bcryptjs";

//  declare module "next-auth/jwt" {
//   interface JWT {
//     access_token: string
//     expires_at: number
//     refresh_token?: string
//     error?: "RefreshTokenError"
//   }

// declare module "next-auth" {
//   interface Session {
//     error?: "RefreshTokenError"
//   }
// }

export const {auth, handlers, signIn, signOut} = NextAuth({
  callbacks: {
      async session({session, token}) {
        if(token?.sub && token?.role) {
          session.user.id = token.sub;
          session.user.role = token.role;
        } 
        return session
      },
      async jwt({token, user}) {
        if(user) {
          token.role = user.role
        }
        return token;
      },
       signIn : async ({user, account} ) => {
          if(account?.provider === "google") {
            try {
              const {email, name, image, id} = user;
              await db.connect();
              const alreadyUser = await User.findOne({email});
              if(!alreadyUser) {
                await User.create({email, name, image, authProviderId: id});
              } else {
                return true;
              }
              
            } catch (error) {
              throw new Error("Error Google Provider")
            }
            
          }
          if(account?.provider === "credentials") {
            return true;
          } else return false
      }
    },
    
    providers: [
        Google,
        GitHub({
          clientId: process.env.AUTH_GITHUB_ID,
          clientSecret: process.env.AUTH_GITHUB_SECRET
        }),
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
    })
    ],
    pages: {
      signIn: "/login"
    }
   
    
})
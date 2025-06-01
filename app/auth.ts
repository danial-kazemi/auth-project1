import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

export const {auth, handlers, signIn, signOut} = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        GitHub
    ]
})
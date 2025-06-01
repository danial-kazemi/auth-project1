"use client";
import { login } from "@/lib/actions/auth";
export const SignInGithubButton = () => {
    return  <button onClick={()=> login()}>Sign In With Github</button>
}
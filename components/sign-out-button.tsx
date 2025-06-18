"use client";
import { logOut } from "@/lib/actions/user";
export const SignOutButton = () => {
    return  <button  onClick={()=> logOut()}>Sign Out</button>
}
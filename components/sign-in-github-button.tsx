"use client";
import { githubSignIn } from "@/lib/actions/user";
export const SignInGithubButton = () => {
    return (
        <form action={githubSignIn}>
             <button type="submit">Sign In With Github</button>
        </form>
    )
}
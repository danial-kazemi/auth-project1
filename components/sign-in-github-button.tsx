
import { FaGithub } from "react-icons/fa";
import { githubSignIn } from "@/lib/actions/user";
 const SignInGithubButton = () => {
    return (
        <form action={githubSignIn}>
             <button className="flex gap-3 items-center p-2" type="submit"><FaGithub size="22"/> In With Github</button>
        </form>
    )
}
export default SignInGithubButton;
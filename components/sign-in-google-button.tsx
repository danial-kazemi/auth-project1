
import { FaGoogle } from "react-icons/fa";
import { googleSignIn } from "@/lib/actions/user";
const SignInGoogleButton = () => {
    return (
        <form action={googleSignIn}>
             <button className="flex gap-3 items-center p-2" type="submit"><FaGoogle size={22}/> In With Google</button>
        </form>
    )
}

export default SignInGoogleButton;
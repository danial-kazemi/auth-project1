
import { auth } from "@/app/auth";
import TeamToggle from "./theme-toggle";
import Link from "next/link"; 
import  Image  from "next/image";
import { SignOutButton } from "./sign-out-button";
export default async function Header() {
    const session = await auth();
  return (
    <header className='flex justify-between'>
        <div className="px-2">
            
        </div>
        <div className="px-2 flex flex-row items-center">
            <span className="p-2">
                {                    
                session?.user?.image && <Image  className="rounded-full" src={session.user.image} width="32" height="32" alt={session.user.name ?? "avatar"} />
                }
            </span>
            <span className="p-2">
                {                    
                session?.user && `Hi, ${session?.user?.name}`
                }
            </span>
            <span className="p-2">
                {                    
                session?.user && < SignOutButton/>
                }
            </span>
            
            <span className="p-2">                
                <TeamToggle />
            </span>
        </div>        
        
    </header>
  )
}



import TeamToggle from "./theme-toggle";
import Link from "next/link"; 
export default function Header() {
  return (
    <header className='grid grid-cols-2 content-center justify-between
'>
        <div className="px-2">
            Danial Kazemi
        </div>
        <div className="px-2">
            <span className="px-2">
                <TeamToggle />
            </span>
            <span className="px-2">
                <Link href="/login">Login</Link>
            </span>
        </div>        
        
    </header>
  )
}




import { auth } from "../../auth";

 export default async function DashboardPage() {
    const session = await auth()
  if(session?.user) {
    return (
    <div>
        <div>
          
        </div>
    </div>
  )
  }

    return (
    <div>
       <p>You Are Not Signed In.</p>
       
    </div>
  )

}


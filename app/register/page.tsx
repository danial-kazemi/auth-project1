
import React from 'react'

function RegisterPage() {
  return ( 
    
      <main className="row-span-10">
        <div className="flex flex-col align-center items-center ">
          <h2 className='p-2'>Register</h2>
            <form className='flex flex-col gap-2' action={async(formData)=>{
              "use server"
              const fullname =  formData.get("fullname")
              const email = formData.get("email")
              const password = formData.get("password")
              const data = {
                fullname,
                email,
                password
              }
              
              const req= await fetch("http://127.0.0.1:3000/api/register",{
                method: "POST",
                headers: {
                        'Content-Type': 'application/json',
                    },
                body: JSON.stringify(data),
              })
            }}>
            <input className='outline-none bg-gray-600 rounded-sm p-2' type='text' name='fullname' placeholder='name' autoFocus/>
            <input className='outline-none bg-gray-600 rounded-sm p-2' type="email" name="email" placeholder='E-mail' />
            <input className='outline-none bg-gray-600 rounded-sm p-2' type='password' name='password' placeholder='Password' />
            <button type="submit" className='bg-gray-500 rounded-sm p-2 text-gray-200' >Register</button>
          </form>
        </div>        
    </main>
 
  )
}

export default RegisterPage
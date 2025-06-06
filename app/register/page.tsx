
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
              
              
            }}>
            <label  htmlFor='fullname'>Full Name:</label >
            <input className='outline-none bg-gray-600 rounded-sm p-2' id='fullname' type='text' name='fullname' placeholder='Mack Tyler ' autoFocus/>
            <label  htmlFor='email'>E-Mail:</label >        
            <input className='outline-none bg-gray-600 rounded-sm p-2' id="email" type="email" name="email" placeholder='Mack@tyler.com' />
            <label  htmlFor='password'>Password:</label >
            <input className='outline-none bg-gray-600 rounded-sm p-2' id='password' type='password' name='password' placeholder='Abcd123$@' />
            <button type="submit" className='bg-gray-500 rounded-sm p-2 text-gray-200'>Register</button>
          </form>
        </div>        
    </main>
 
  )
}

export default RegisterPage
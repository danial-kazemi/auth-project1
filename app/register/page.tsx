
import React from 'react'

function RegisterPage() {
  return (    
    
      <main className="row-span-10">
        <div className="flex flex-col align-center items-center">
          <h2 className=''>Register</h2>
            <form className='flex flex-col gap-2'>
            <input className='outline-none bg-gray-600 rounded-sm p-2' type='text' name='name' placeholder='name' autoFocus/>
            <input className='outline-none bg-gray-600 rounded-sm p-2' type="email" name="email" placeholder='E-mail' />
            <input className='outline-none bg-gray-600 rounded-sm p-2' type='password' name='password' placeholder='Password' />
            <button type="submit" className='bg-gray-500 rounded-sm p-2 text-gray-200' >Register</button>
          </form>
        </div>        
    </main>
 
  )
}

export default RegisterPage
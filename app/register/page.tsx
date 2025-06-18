
import { register } from '@/lib/actions/user'
import Link from 'next/link'
import React from 'react'

function RegisterPage() {
  return ( 
    
      <main className="row-span-10">
        <div className="flex flex-col align-center items-center ">
          <h2 className='p-2 font-bold text-xl'>Register</h2>
          <p className='text-neutral-600 text-sm max-w-sm my-4  dark:text-neutral-300 '>Please provide all the necessary information</p>
            <form className='flex flex-col gap-2' action={register}>              
            <div className='flex flex-col sm:flex-row gap-2'>
              <div className="flex flex-col">
                  <label  className='pb-2' htmlFor='firstName'>First Name:</label >
                  <input className='outline-none bg-gray-600 rounded-sm p-2' id='firstName' type='text' name='firstName' placeholder='Mack' autoFocus/>
            
              </div>
            <div className='flex flex-col'>
                <label className='pb-2' htmlFor='lastName'>Last Name:</label >
                <input className='outline-none bg-gray-600 rounded-sm p-2' id='lastName' type='text' name='lastName' placeholder='Tyler '/>
            </div>
            </div>
            <label  className='pb-2' htmlFor='email'>E-Mail:</label >        
            <input className='outline-none bg-gray-600 rounded-sm p-2' id="email" type="email" name="email" placeholder='Mack@tyler.com' />
            <label className='pb-2'  htmlFor='password'>Password:</label >
            <input className='outline-none bg-gray-600 rounded-sm p-2' id='password' type='password' name='password' placeholder='Abcd123$@' />
            <button type="submit" className='bg-gray-500 rounded-sm p-2 text-gray-200'>Register &rarr;</button>
            <p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>Alredy have an account? <Link href='/login'>Login</Link></p>
            <div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' /> 
          </form>
        </div>        
    </main>
 
  )
}

export default RegisterPage
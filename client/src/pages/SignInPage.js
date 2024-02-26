import React from 'react'
import { SignIn } from '@clerk/clerk-react'
const SignInPage = () => {
  return (
    <div className='flex justify-center items-center p-12'>
        <SignIn/>
    </div>
    
  )
}

export default SignInPage
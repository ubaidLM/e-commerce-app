import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignInPage from '../pages/SignInPage'
import Signuppage from '../pages/Signuppage'
const Router = () => {
  return (
    <Routes>
      <Route index path='/' element={<SignInPage />} />
      <Route index path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<Signuppage />} />
    </Routes>
  )
}

export default Router
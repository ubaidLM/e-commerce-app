import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'
const AppRouter = () => {
  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter
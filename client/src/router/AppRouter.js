import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsPage from '../pages/ProductsPage'
import ProductPage from '../pages/ProductPage'
const AppRouter = () => {
  return (
    <>
   <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Product' element={<ProductsPage />} />
      <Route path='/Product/:id' element={<ProductPage />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default AppRouter
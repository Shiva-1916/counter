import React from 'react'
import style from './navigationStack.module.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './home-screen'
import ProductScreen from './products-screen'
import DropdownNavbar from '../../components/navbars/dropdown'
import CustomNavbar from '../../components/navbars/navbar'
import CategoryScreen from './category-screen'

const NavigationStack = () => {
  return (
    <>
   <CustomNavbar/>
    <Routes>
        
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='product' element={<ProductScreen/>}/>
        <Route path='categories' element={<CategoryScreen/>}/>
        
        
    </Routes>
    </>
  )
}

export default NavigationStack

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TableData from './table-data'


const MainStack = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<TableData/>}/>
        <Route/>
    </Routes>
    </>
  )
}

export default MainStack

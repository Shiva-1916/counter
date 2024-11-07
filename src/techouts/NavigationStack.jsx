import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function Navigations() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route>
       <Home  />
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigations

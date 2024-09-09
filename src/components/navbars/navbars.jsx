import React from 'react'
import { Link } from 'react-router-dom'
import style from '../../react-router-dom/dynamic/home.module.css'

const NavbarExample= () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light" >
  <a className="navbar-brand" href="#">
    Navbar
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="product">Products</Link>
      </li>
      <li className="nav-item">
      <Link to="categories">Category</Link>
      </li>
    
    </ul>
  </div>
</nav>
    </div>
  )
}

export default NavbarExample

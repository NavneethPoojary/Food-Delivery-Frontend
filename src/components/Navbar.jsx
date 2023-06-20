import React from 'react'
import foodImage from '../assets/food.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className="nav-content">
      <Link  to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      </div>
    </div>
  )
}

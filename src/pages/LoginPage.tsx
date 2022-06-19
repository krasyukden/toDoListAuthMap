import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from '../components/Login'


const LoginPage = () => {
  return (
    <div>
      <div>LoginPage</div>
      <Login />
      <span>Or </span>
      <NavLink to="/register">register</NavLink>
    </div>
  )
}

export default LoginPage
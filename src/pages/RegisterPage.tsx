import React from 'react'
import { NavLink } from 'react-router-dom';
import SignUp from '../components/SignUp';

type Props = {}

const RegisterPage = (props: Props) => {
  return (
    <div>
      <div>RegisterPage</div>
      <SignUp />
      <div>Already have account? <NavLink to={"/login"}>Sign in</NavLink></div>
    </div>
  )
}

export default RegisterPage;
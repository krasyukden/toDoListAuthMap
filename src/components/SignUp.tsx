import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import FormLogin from './FormLogin';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';

const SignUp = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
             
        const user = userCredential.user;
        
        dispatch(setUser(
          {
            email: user.email,// то что ожидаем в payload, пришло в console.log(auth)
            token: user.refreshToken,//пришло в console.log(auth)
            id: user.uid
          }
        ))

        navigate('/')
      
            console.log(user)
      


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <div><FormLogin title='register' handleClick={handleRegister} /></div>
  )
}

export default SignUp;
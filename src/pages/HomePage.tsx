import styles from '../app.module.css';
/* import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'; */
import InputField from '../components/InputField';
import TodoList from '../components/TodoList';
import { useAppDispatch } from '../redux/redux-hook';
import React, { useEffect, useState } from 'react';
import { addTodo } from '../redux/todoSlice';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../redux/use-auth'
import { removeUser } from '../redux/userSlice';
import Map from '../components/Map/Map';
import { useJsApiLoader } from '@react-google-maps/api';


const REACT_APP_FIREBASE_API_KEY:any = process.env.REACT_APP_FIREBASE_API_KEY;

const defaultCenter: any = {
  lat: 51.30,
  lng: 0
};


const HomePage = () => {

  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  //const dispatch = useDispatch();

  const libraries: any = ['places'];//

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: REACT_APP_FIREBASE_API_KEY,
    libraries
  });

  

  const addTask = () => {
    if (text.trim().length) {
      dispatch(addTodo({ text }))
      setText('')
    }
  }//передать как  action

  return (isAuth ?
    <div>
      <div>Hi</div>
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>

      <div className={styles.app}>
        <div >
          <InputField text={text} handleInput={setText} handleSubmit={addTask} />
          <TodoList />
          <div>{{isLoaded} ? 
          <Map center={defaultCenter}/>
          : <h2>...Loading</h2>}
          </div>
        </div>
      </div>
    </div>
: <NavLink to={"/login"}>login</NavLink>

  )
}

export default HomePage;
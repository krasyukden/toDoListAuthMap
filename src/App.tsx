/* import './App.css';
import { deleteActionCreator, loadActionCreator, postSyncActionCreator, setCurrentPageActionCreator, sortByPostAscActionCreator, sortByPostDisActionCreator } from './redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IData } from './redux/reducer';
import Preloader from './Preloader';
import { openStdin } from 'process';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors'; */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './firebase';


const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
     {/*  <Route path="*" element={<Navigate to="/login" replace />} />  */}
    </Routes>
    </BrowserRouter>
  )
}

export default App;

//https://www.youtube.com/watch?v=4PrpRCTxcno
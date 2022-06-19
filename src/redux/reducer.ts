import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux'

import todoReducer from './todoSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer
     
  }
})

/* const reducer = combineReducers({
  todos: todoReducer,
  user: userReducer
})
export const store = configureStore(reducer); */




export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>
//export type Reducers = ReturnType<typeof reducer>;
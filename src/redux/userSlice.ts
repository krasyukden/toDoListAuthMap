import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface IStateUser{
  email: string | null;
  token: string | null;
  id: number | null
}

const initialState: IStateUser = {
  email: null,
  token: null,
  id: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: IStateUser, action: any){
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;


    },
    removeUser(state: IStateUser){
      state.email = null;
      state.token = null;
      state.id = null;

    }
  } 
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;

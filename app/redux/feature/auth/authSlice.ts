import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {destroyLocalStorage, setLocalUser} from '../../../utils/helper';

export interface authState {
  user: null | any;
  token: string | null;
}

const initialState: authState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<any>) => {
      // console.log(action, 'action');
      const user = action.payload.user;
      state.user = action.payload.user;
      state.token = action.payload.token;
      setLocalUser(user);
    },
    updateUser: (state, action: PayloadAction<any>) => {
      const user = action.payload;
      const newUser = {...state.user, ...user};
      state.user = newUser;
      setLocalUser(newUser);
    },
    logOut: (state, action: PayloadAction<any>) => {
      state.user = null;
      state.token = null;
      destroyLocalStorage();
    },
  },
});

// Action creators are generated for each case reducer function
export const {setAuth, updateUser, logOut} = authSlice.actions;
export const tokenSelector = (s: any) => s.auth?.token;
export const authSelector = (s: any) => s.auth?.user;

export default authSlice.reducer;

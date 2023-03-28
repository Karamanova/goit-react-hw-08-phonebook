import { Notify } from "notiflix";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "api/axios";
import axios from "axios";

// ================== INITIAL STATE
const initialState = {
  user: {
    name: '',
    email: null,
  },
  token: null,
  isLogged: false,
};

// ================== SELECTORS
export const getUserName = state => state.auth.user.name;
export const getLogging = state => state.auth.isLogged;
export const getToken = state => state.auth.token;

// ================== ASYNC OPERATIONS
export const registerUser = createAsyncThunk(
  'auth/register',
  async (values) => {
    try {
      const { data } = await axios.post('/users/signup', values);
      token.set(data.token);
      Notify.success('Registration successful!');
      return data;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values) => {
    try {
      const { data } = await axios.post('/users/login', values);
      token.set(data.token);
      Notify.success('Login successful!');
      return data;
    } catch (error) {
      Notify.failure(`${error}. This user dont exist`);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async () => {
    try {
      await axios.post('/users/logout');
      token.unset();
      Notify.success('Logout successful!');
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

// ================== REDUSER
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [logoutUser.fulfilled](state) {
      state.user = {
        name: '',
        email: null,
      };
      state.token = null;
      state.isLogged = false;
    },
  },
})
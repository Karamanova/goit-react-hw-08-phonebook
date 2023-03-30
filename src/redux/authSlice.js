import { Notify } from "notiflix";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "api/axios";
import axios from "axios";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// ================== INITIAL STATE
const initialState = {
  user: {
    name: "",
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// ================== SELECTORS
export const getUserName = (state) => state.auth.user.name;
export const getLogging = (state) => state.auth.isLoggedIn;
export const getToken = (state) => state.auth.token;

// ================== ASYNC OPERATIONS
export const registerUser = createAsyncThunk(
  "auth/register",
  async (values) => {
    try {
      const { data } = await axios.post("/users/signup", values);
      token.set(data.token);
      Notify.success("Registration successful!");
      return data;
    } catch (error) {
      Notify.failure(error.message);
      throw error;
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (values) => {
    try {
      const { data } = await axios.post("/users/login", values);
      token.set(data.token);
      Notify.success("Login successful!");
      return data;
    } catch (error) {
      Notify.failure(`${error}. This user doesn't exist`);
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
    Notify.success("Logout successful!");
  } catch (error) {
    Notify.failure(error.message);
    throw error;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken =
      localStorage.getItem("token") || state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      Notify.failure(error.message);
      throw error;
    }
  }
);

// ================== REDUCER
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserFromLocalStorage: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
      state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
      state.isLogging = false;
      localStorage.removeItem("token");
      }),
  });

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
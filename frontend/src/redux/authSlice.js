import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  isLogin: true,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    switchToRegister: (state) => {
      state.isLogin = false;
    },
    switchToSignIn: (state) => {
      state.isLogin = true;
    },
    updateState: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetState: () => initialState,
  },
});

export const { switchToRegister, switchToSignIn, updateState } = authSlice.actions;
export const authSliceName = authSlice.name;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  isLogin: true,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    switchRegister: (state) => {
      Object.assign(state, initialState);
      state.isLogin = false;
    },
    switchSignin: (state) => {
      Object.assign(state, initialState);
      state.isLogin = true;
    },
    updateInput: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetState: () => initialState,
  },
});

export const { switchRegister, switchSignin, updateInput } = authSlice.actions;
export const authSliceName = authSlice.name;
export default authSlice.reducer;

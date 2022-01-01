import { createSlice } from "@reduxjs/toolkit";

export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    userName: "",
    id: "",
    isLoggedIn: false,
    jwtToken: "",
  },
  reducers: {
    login: (state, action) => {
      const newAdminLogin = {
        ...action.payload,
      };
      state.userName = newAdminLogin.userName;
      state.id = newAdminLogin.id;
      state.isLoggedIn = newAdminLogin.isLoggedIn;
      state.jwtToken = newAdminLogin.jwtToken;
    },
    register: (state, action) => {
      const newAdmin = {
        ...action.payload,
      };
      state.userName = newAdmin.userName;
    },
    getAdmin: (state, action) => {
      const newAdmin = {
        ...action.payload,
      };
      state.userName = newAdmin.userName;
      state.id = newAdmin._id;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.jwtToken = "";
    },
  },
});
export const { login, logout, register, getAdmin } = adminSlice.actions;

export default adminSlice.reducer;

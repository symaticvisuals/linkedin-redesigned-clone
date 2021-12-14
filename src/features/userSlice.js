import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {
			name: "",
			email: "",
			password: "",
			designation: "",
			username: "",
			education: "",
			profilePic: "",
			emailVerified: false,
		},
		login: { isLoggedIn: false },
	},
	reducers: {
		login: (state, action) => {
			state.login.isLoggedIn = action.payload;
		},
		register: (state, action) => {
			const newUser = {
				...action.payload,
			};
			state.user.name = newUser.fname + " " + newUser.lname;
			state.user.email = newUser.email;
			state.user.password = newUser.password;
			state.user.username = newUser.username;
		},
		getUser: (state, action) => {
			const newUser = {
				...action.payload,
			};
			state.user.name = newUser.name;
			state.user.email = newUser.email;
			state.user.password = newUser.password;
			state.user.username = newUser.username;
			state.user.designation = newUser.designation;
			state.user.education = newUser.education;
			state.user.profilePic = newUser.profilePic;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});
export const { login, logout, register, getUser } = userSlice.actions;

export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: {
			_id: "",
			email: "",
			firstName: "",
			lastName: "",
			designation: "",
			userName: "",
			education: "",
			emailAuth: 0,
			isActive: 0,
			intrestFilters: [],
			number_of_followers: 0,
			number_of_following: 0,
			followers: [],
			following: [],
			profilePicture: "",
		},
		login: { isLoggedIn: false, userJwt: "" },
	},
	reducers: {
		login: (state, action) => {
			const newLogin = {};
			state.login.isLoggedIn = action.payload;
			state.login.userJwt = action.payload;
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
			state.user._id = newUser._id;
			state.user.email = newUser.email;
			state.user.firstName = newUser.firstName;
			state.user.lastName = newUser.lastName;
			state.user.designation = newUser.designation;
			state.user.userName = newUser.userName;
			state.user.education = newUser.education;
			state.user.emailAuth = newUser.emailAuth;
			state.user.isActive = newUser.isActive;
			state.user.intrestFilters = newUser.intrestFilters;
			state.user.number_of_followers = newUser.number_of_followers;
			state.user.number_of_following = newUser.number_of_following;
			state.user.followers = newUser.followers;
			state.user.following = newUser.following;
			state.user.profilePicture = newUser.profilePicture;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});
export const { login, logout, register, getUser } = userSlice.actions;

export default userSlice.reducer;

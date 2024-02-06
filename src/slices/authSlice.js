import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
	authorizedUser: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		loginUser: (state, action) => {
			state.authorizedUser = action.payload;
		},
		logoutUser: (state, action) => {
			state.authorizedUser = null;
		},
	},
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

export const getAuthorizedUser = (state) => state.auth.authorizedUser;

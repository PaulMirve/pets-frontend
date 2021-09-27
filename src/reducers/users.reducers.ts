import { createSlice } from '@reduxjs/toolkit'
import User from '../interfaces/User';

const initialState: User | null = null;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        postUser: (state, action) => {
            return action.payload;
        },
        login: (state, action) => {
            return action.payload;
        },
        isAuthenticated: (state, action) => {
            return action.payload;
        },
    }
});

export const {
    postUser,
    login,
    isAuthenticated
} = userSlice.actions
export default userSlice.reducer
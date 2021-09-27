import { createSlice } from '@reduxjs/toolkit'
import Post from '../interfaces/Post';

const initialState: Post[] = [];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPosts: (state, action) => {
            return [...action.payload];
        }
    }
});

export const {
    fetchPosts
} = postSlice.actions
export default postSlice.reducer
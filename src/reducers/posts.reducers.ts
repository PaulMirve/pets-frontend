import { createSlice } from '@reduxjs/toolkit'
import Post from '../types/Post';

const initialState: Post[] = [];

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPosts: (state, action) => {
            return [...action.payload];
        },
        postPost: (state, action) => {
            return [action.payload, ...state];
        }
    }
});

export const {
    fetchPosts,
    postPost
} = postSlice.actions
export default postSlice.reducer
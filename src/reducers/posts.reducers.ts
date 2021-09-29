import { createSlice } from '@reduxjs/toolkit'
import Post from '../types/Post';

interface FetchAction {
    type: string,
    payload: Post[]
}

interface PostAction {
    type: string,
    payload: Post
}



const initialState: { [key: string]: Post } = {};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPosts: (state, { type, payload }: FetchAction) => {
            let posts: { [key: string]: Post } = {};
            payload.forEach(post => {
                posts[post.public_id] = post;
            });
            return posts;
        },
        postPost: (state, { type, payload }: PostAction) => {
            return { ...state, [payload.public_id]: payload };
        },
        addComment: (state, { type, payload }: PostAction) => {
            return { ...state, [payload.public_id]: payload };
        }
    }
});

export const {
    fetchPosts,
    postPost,
    addComment
} = postSlice.actions
export default postSlice.reducer
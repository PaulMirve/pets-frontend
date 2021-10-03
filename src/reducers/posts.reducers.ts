import { createSlice, current } from '@reduxjs/toolkit'
import Post from '../types/Post';

interface FetchAction {
    type: string,
    payload: {
        count: number,
        posts: Post[]
    }
}

interface PostAction {
    type: string,
    payload: Post
}

interface State {
    count: number,
    posts: { [key: string]: Post }
}


const initialState: State = { count: 0, posts: {} };

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchPosts: (state, { type, payload }: FetchAction): State => {
            let posts: { [key: string]: Post } = { ...state.posts };
            payload.posts.forEach(post => {
                posts[post.public_id] = post
            });
            return { count: payload.count, posts };
        },
        postPost: (state, { type, payload }: PostAction): State => {
            let newState: State = { count: state.count, posts: current(state).posts };
            newState.posts = { [payload.public_id]: payload, ...newState.posts }
            newState.count = newState.count + 1;
            return { ...newState };
        },
        addComment: (state, { type, payload }: PostAction) => {
            let newState: State = { count: state.count, posts: { ...current(state).posts } };
            newState.posts[payload.public_id] = payload
            return { ...newState };
        },
        addCommentLike: (state, { type, payload }: PostAction) => {
            let newState: State = { count: state.count, posts: { ...current(state).posts } };
            newState.posts[payload.public_id] = payload
            return { ...newState };
        }
    }
});

export const {
    fetchPosts,
    postPost,
    addComment,
    addCommentLike
} = postSlice.actions
export default postSlice.reducer
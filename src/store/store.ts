import { configureStore } from "@reduxjs/toolkit";
import posts from '../reducers/posts.reducers';
import user from "../reducers/users.reducers";

export const store = configureStore({
    reducer: {
        posts,
        user
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
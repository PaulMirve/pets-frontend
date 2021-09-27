import { Dispatch } from "redux"
import api from "../api/api";
import { fetchPosts as fetchposts } from "../reducers/posts.reducers";

export const fetchPost = (limit: number = 10, offset: number = 0) => {
    return async (dispatch: Dispatch) => {
        const response = await api.get(`/api/posts`);
        dispatch(fetchposts(response.data.posts));
    }
}
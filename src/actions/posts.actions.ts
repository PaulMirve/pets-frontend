import { Dispatch } from "redux"
import api from "../api/api";
import history from "../history";
import Post from "../interfaces/Post";
import { fetchPosts as fetchposts, postPost as _postPost } from "../reducers/posts.reducers";

export const fetchPost = (limit: number = 5, offset: number = 0) => {
    return async (dispatch: Dispatch) => {
        const response = await api.get(`/api/posts?limit=${limit}&offset=${offset}`);
        dispatch(fetchposts(response.data));
    }
}

export const postPost = (data: FormData) => {
    return async (dispatch: Dispatch) => {
        const response = await api.post(`/api/posts`, data, {
            headers: {
                "Authorization": localStorage.getItem('user')
            }
        });
        dispatch(_postPost(response.data));
        history.push('/');
    }
}

export const putPost = (post: Post) => {

}
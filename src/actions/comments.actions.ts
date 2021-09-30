import { Dispatch } from "redux"
import api from "../api/api"
import { addComment, addCommentLike } from "../reducers/posts.reducers"
import Post from "../types/Post"

export const postComment = (comment: string, public_id: string) => {
    return async (dispatch: Dispatch) => {
        const response = await api.post<Post>(`/api/comments/${public_id}`, { comment }, {
            headers: {
                "Authorization": localStorage.getItem('user')
            }
        });
        dispatch(addComment(response.data))
    }
}

export const likeComment = (commentPublicId: string) => {
    return async (dispatch: Dispatch) => {
        const response = await api.put<Post>(`/api/comments/${commentPublicId}`, {
            headers: {
                "Authorization": localStorage.getItem('user')
            }
        });
        dispatch(addCommentLike(response.data))
    }
}
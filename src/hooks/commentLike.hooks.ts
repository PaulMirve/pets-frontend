import { useState } from "react"
import api from "../api/api";
import history from "../history";
import Comment from "../types/Comment";
import User from "../types/User";
import { useAppSelector } from './hooks';

const useCommentLike = (comment: Comment): [number, boolean, () => void] => {
    let user: User | null = useAppSelector(state => state.user);
    const [likesCount, setLikesCount] = useState<number>(comment.likeCount);
    const [commentIsLiked, setCommentIsLiked] = useState<boolean>(comment.likes.some(_user => _user.username === user?.username));

    const onLike = (): void => {
        if (user) {
            api.put<User>(`/api/comments/like/${comment.public_id}`, {}, {
                headers: {
                    "Authorization": localStorage.getItem('user')
                }
            });

            if (commentIsLiked) {
                setLikesCount(likesCount - 1);
                setCommentIsLiked(false);
            } else {
                setLikesCount(likesCount + 1);
                setCommentIsLiked(true);
            }
        } else {
            history.push('/login');
        }
    }


    return [likesCount, commentIsLiked, onLike];
}

export default useCommentLike;
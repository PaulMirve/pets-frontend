import { useEffect, useState } from "react";
import api from "../api/api";
import history from "../history";
import Comment from "../types/Comment";
import Post from "../types/Post";
import { useAppSelector } from './hooks';

const useComment = (post: Post): [string, (comment: string) => void, Comment[], number, () => void] => {
    const { user } = useAppSelector(state => state);
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>(post.comments);
    const [commentsCount, setCommentsCount] = useState<number>(post.comments.length);

    const addComment = async (): Promise<void> => {
        if (user) {
            setCommentsCount(commentsCount + 1);
            setComment("");
            const response = await api.post<Comment>(`/api/comments/${post.public_id}`, { comment }, {
                headers: {
                    "Authorization": localStorage.getItem('user')
                }
            });
            setComments([response.data, ...comments]);
        } else {
            history.push('/login');
        }
    }

    useEffect(() => {
        setComments(post.comments);
    }, [post]);

    return [comment, setComment, comments, commentsCount, addComment];
}

export default useComment;
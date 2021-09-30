import { useEffect, useState } from "react";
import { postComment } from "../actions/comments.actions";
import Comment from "../types/Comment";
import Post from "../types/Post";
import { useAppDispatch, useAppSelector } from './hooks';

const useComment = (post: Post): [string, (comment: string) => void, Comment[], number, () => void] => {
    console.log(post.comments)
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.posts);
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>(post.comments);
    const [commentsCount, setCommentsCount] = useState<number>(post.comments.length);

    const addComment = (): void => {
        setCommentsCount(commentsCount + 1);
        setComment("");
        dispatch(postComment(comment, post.public_id));
    }

    useEffect(() => {
        setComments(posts[post.public_id].comments);
    }, [posts, post.public_id]);

    return [comment, setComment, comments, commentsCount, addComment];
}

export default useComment;
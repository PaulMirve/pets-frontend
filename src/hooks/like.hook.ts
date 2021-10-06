import { useEffect, useState } from "react"
import api from "../api/api";
import history from "../history";
import Post from "../types/Post";
import User from "../types/User";
import { useAppSelector } from './hooks';

const useLike = (post: Post): [number, boolean, () => void] => {
    let user: User | null = useAppSelector(state => state.user);
    const [likesCount, setLikesCount] = useState<number>(post.likeCount);
    const [postIsLiked, setPostIsLiked] = useState<boolean>(post.likes.some(_user => _user.username === user?.username));

    useEffect(() => {
        setLikesCount(post.likeCount);
        setPostIsLiked(post.likes.some(_user => _user.username === user?.username));
    }, [post]);

    const onLike = (): void => {
        if (user) {
            api.put<User>(`/api/posts/like/${post.public_id}`, {}, {
                headers: {
                    "Authorization": localStorage.getItem('user')
                }
            });

            if (postIsLiked) {
                setLikesCount(likesCount - 1);
                setPostIsLiked(false);
            } else {
                setLikesCount(likesCount + 1);
                setPostIsLiked(true);
            }
        } else {
            history.push('/login');
        }
    }


    return [likesCount, postIsLiked, onLike];
}

export default useLike;
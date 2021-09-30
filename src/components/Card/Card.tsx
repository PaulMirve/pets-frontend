import React, { useState } from 'react'
import history from '../../history';
import Post from '../../types/Post';
import { useAppSelector } from '../../hooks/hooks';
import User from '../../types/User';
import api from '../../api/api';
import CommentsSection from '../CommentsSection/CommentsSection';
import IconSet from '../IconSet/IconSet';
import PostImage from '../PostImage/PostImage';

interface IProps {
    post: Post
}
const Card: React.FC<IProps> = ({ post }) => {
    let user: User | null = useAppSelector(state => state.user);
    const [likesCount, setLikesCount] = useState<number>(post.likeCount);
    const [postIsLiked, setPostIsLiked] = useState<boolean>(post.likes.some(_user => _user.username === user?.username));

    const onLikeClick = async () => {
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
    }

    return (
        <div className="card">
            <PostImage src={post.img} alt={post._id} />
            <h5 onClick={() => history.push(`/u/${post.user.username}`)} className="card__username">{post.user.username}</h5>
            <IconSet onLikeClick={onLikeClick} isLiked={postIsLiked} likesCount={post.likeCount} commentCount={post.comments.length} />
            <div className="card__description">{post.description}</div>
            <CommentsSection post={post} />
        </div>
    )
}

export default Card;

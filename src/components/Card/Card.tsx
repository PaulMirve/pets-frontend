import React, { useState } from 'react'
import history from '../../history';
import Post from '../../types/Post';
import IconChatBubbleElipsesOutline from '../../svg/IconChatBubbleElipsesOutline';
import IconHeartOutline from '../../svg/IconHeartOutline';
import { useAppSelector } from '../../hooks/hooks';
import User from '../../types/User';
import IconHeart from '../../svg/IconHeart';
import api from '../../api/api';
import CommentsSection from '../CommentsSection/CommentsSection';

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
            <figure onDoubleClick={onLikeClick} className="card__frame">
                <img src={post.img} alt={post._id} className="card__img" />
            </figure>
            <h5 onClick={() => history.push(`/u/${post.user.username}`)} className="card__username">{post.user.username}</h5>
            <div className="card__actions">
                <div className="card__action-box">
                    {postIsLiked ? <IconHeart onClick={onLikeClick} className="card__icon" /> : <IconHeartOutline onClick={onLikeClick} className="card__icon" />}
                    <h5 className="card__icon-number">{likesCount}</h5>
                </div>
                <div className="card__action-box">
                    <IconChatBubbleElipsesOutline className="card__icon" />
                    <h5 className="card__icon-number">{9}</h5>
                </div>
            </div>
            <div className="card__description">{post.description}</div>
            <CommentsSection post={post} />
        </div>
    )
}

export default Card;

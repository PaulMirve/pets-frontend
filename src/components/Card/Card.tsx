import React from 'react'
import Post from '../../interfaces/Post';
import IconChatBubbleElipsesOutline from '../../svg/IconChatBubbleElipsesOutline';
import IconHeartOutline from '../../svg/IconHeartOutline';

interface IProps {
    post: Post
}
const Card: React.FC<IProps> = ({ post }) => {
    return (
        <div className="card">
            <img src={post.img} alt={post._id} className="card__img" />
            <h5 className="card__username">paulmirve</h5>
            <div className="card__actions">
                <div className="card__action-box">
                    <IconHeartOutline className="card__icon" />
                    <h5 className="card__icon-number">{post.likeCount}</h5>
                </div>
                <div className="card__action-box">
                    <IconChatBubbleElipsesOutline className="card__icon" />
                    <h5 className="card__icon-number">{9}</h5>
                </div>
            </div>
            <div className="card__description">{post.description}</div>
        </div>
    )
}

export default Card;

import React from 'react'
import IconChatBubbleElipsesOutline from '../../svg/IconChatBubbleElipsesOutline';
import IconHeartOutline from '../../svg/IconHeartOutline';
import Heading from '../Heading/Heading';
import Post from '../../types/Post';
import CommentsSection from '../CommentsSection/CommentsSection';

interface IProps {
    post: Post
}
const ModalCard: React.FC<IProps> = ({ post }) => {
    return (
        <div className="modal-card">
            <img className="modal-card__img" src={post.img} alt={post.public_id} />
            <div className="modal-card__content">
                <Heading centered type="subtitle">{post.user.username}</Heading>
                <div className="modal-card__icons">
                    <div className="modal-card__icon-box">
                        <IconHeartOutline />
                        {post.likeCount}
                    </div>
                    <div className="modal-card__icon-box">
                        <IconChatBubbleElipsesOutline />
                        {post.comments.length}
                    </div>
                </div>
                <p className="modal-card__description">
                    {post.description}
                </p>
                <CommentsSection type="extended" post={post} />
            </div>
        </div>
    )
}

export default ModalCard

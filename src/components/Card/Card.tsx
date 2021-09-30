import React from 'react'
import history from '../../history';
import Post from '../../types/Post';
import CommentsSection from '../CommentsSection/CommentsSection';
import IconSet from '../IconSet/IconSet';
import PostImage from '../PostImage/PostImage';
import useLike from '../../hooks/like.hook';

interface IProps {
    post: Post
}
const Card: React.FC<IProps> = ({ post }) => {
    const [likesCount, postIsLiked, onLike] = useLike(post);

    return (
        <div className="card">
            <PostImage src={post.img} alt={post._id} frameProps={{ onDoubleClick: onLike }} />
            <h5 onClick={() => history.push(`/u/${post.user.username}`)} className="card__username">{post.user.username}</h5>
            <IconSet onLikeClick={onLike} isLiked={postIsLiked} likesCount={likesCount} commentCount={post.comments.length} />
            <div className="card__description">{post.description}</div>
            <CommentsSection post={post} />
        </div>
    )
}

export default Card;

import React from 'react'
import history from '../../history';
import useCommentLike from '../../hooks/commentLike.hooks';
import IconHeart from '../../svg/IconHeart';
import IconHeartOutline from '../../svg/IconHeartOutline'
import TypeComment from '../../types/Comment'

interface IProps {
    comment: TypeComment
}

const Comment: React.FC<IProps> = ({ comment }) => {
    const [likesCount, isLiked, onLike] = useCommentLike(comment);
    return (
        <div className="comment">
            <div className="comment_container">
                <b onClick={() => history.push(`/u/${comment.user.username}`)} className="comment__user">{comment.user.username}</b>
                <p className="comment__comment">{comment.comment}</p>
            </div>
            <div className="comment__likes">
                {likesCount}
                {isLiked ? <IconHeart onClick={onLike} className="comment__like" /> : <IconHeartOutline onClick={onLike} className="comment__like" />}
            </div>

        </div>
    )
}

export default Comment

import React from 'react'
import IconHeartOutline from '../../svg/IconHeartOutline'
import TypeComment from '../../types/Comment'

interface IProps {
    comment: TypeComment
}

const Comment: React.FC<IProps> = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment_container">
                <b className="comment__user">{comment.user.username}</b>
                <p className="comment__comment">{comment.comment}</p>
            </div>
            <IconHeartOutline className="comment__like" />
        </div>
    )
}

export default Comment

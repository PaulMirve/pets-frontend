import React from 'react'
import IconCaretForwardOutline from '../../svg/IconCaretForwardOutline';
import Post from '../../types/Post'
import Comment from './Comment';

interface IProps {
    post: Post
}
const CommentsSection: React.FC<IProps> = ({ post }) => {
    return (
        <div className="comment-section">
            {
                post.comments.slice(0, 5).map(comment => {
                    return <Comment comment={comment} />
                })
            }
            <div style={{ marginTop: '2rem' }} className="comment-section__form-group">
                <input type="text" className="comment-section__text-input" placeholder="Add a comment..." />
                <IconCaretForwardOutline className="comment-section__form-group__icon" />
            </div>

        </div>
    )
}

export default CommentsSection

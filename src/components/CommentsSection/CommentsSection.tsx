import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { postComment } from '../../actions/comments.actions';
import { useAppDispatch } from '../../hooks/hooks';
import IconCaretForwardOutline from '../../svg/IconCaretForwardOutline';
import Post from '../../types/Post'
import Comment from './Comment';

interface IProps {
    post: Post
}

const CommentsSection: React.FC<IProps> = ({ post }) => {
    const [comment, setComment] = useState<string>("");
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment("");
        dispatch(postComment(comment, post.public_id));
    }

    return (
        <div className="comment-section">
            {
                post.comments.slice(0, 2).map(comment => {
                    return <Comment key={comment._id} comment={comment} />
                })
            }
            <p className="comment-section__see-more">{t("comment_section.see_more")}</p>
            <div style={{ marginTop: '2rem' }} className="comment-section__form-group">
                <form onSubmit={onCommentSubmit}>
                    <input
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        type="text"
                        className="comment-section__text-input"
                        placeholder="Add a comment..." />
                    <button className="comment-section__button">
                        <IconCaretForwardOutline className="comment-section__icon" />
                    </button>
                </form>

            </div>

        </div>
    )
}

export default CommentsSection

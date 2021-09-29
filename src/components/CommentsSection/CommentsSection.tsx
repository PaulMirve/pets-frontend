import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { postComment } from '../../actions/comments.actions';
import { useAppDispatch } from '../../hooks/hooks';
import IconCaretForwardOutline from '../../svg/IconCaretForwardOutline';
import Post from '../../types/Post'
import Comment from './Comment';
import TypeComment from '../../types/Comment';

interface IProps {
    post: Post,
    type?: "default" | "extended"
}

const CommentsSection: React.FC<IProps> = ({ post, type }) => {
    const [comment, setComment] = useState<string>("");
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const onCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment("");
        dispatch(postComment(comment, post.public_id));
    }

    const getType = (): string => {
        switch (type) {
            case "extended":
                return "comment-section--extended";
            default:
                return " ";
        }
    }

    const getComments = (): TypeComment[] => {
        const comments: TypeComment[] = post.comments;
        if (type !== "extended") {
            return comments.slice(0, 2);
        }
        console.log(comments)
        return comments;
    }

    return (
        <div className={`comment-section ${getType()}`}>
            <div className="comment-section__comments">
                {
                    getComments().map(comment => {
                        return <Comment key={comment._id} comment={comment} />
                    })
                }
            </div>
            {type !== "extended" && <p className="comment-section__see-more">{t("comment_section.see_more")}</p>}
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

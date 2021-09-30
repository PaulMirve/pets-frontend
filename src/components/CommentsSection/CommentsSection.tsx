import React from 'react'
import { useTranslation } from 'react-i18next';
import Post from '../../types/Post'
import Comment from './Comment';
import TextInput from '../Form/TextInput';
import history from '../../history';
import useComment from '../../hooks/comment.hook';

interface IProps {
    post: Post
}

const CommentsSection: React.FC<IProps> = ({ post }) => {

    const [comment, setComment, , , addComment] = useComment(post);
    const { t } = useTranslation();

    return (
        <div className={`comment-section`}>
            <div className="comment-section__comments">
                {
                    post.comments.slice(0, 2).map(comment => {
                        return <Comment key={comment._id} comment={comment} />
                    })
                }
            </div>
            <p onClick={() => history.push(`/p/${post.public_id}`)} className="comment-section__see-more">{t("comment_section.see_more")}</p>
            <div style={{ marginTop: '2rem' }} className="comment-section__form-group">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    addComment();
                }}>
                    <TextInput
                        variant="stylized"
                        name="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        type="text"
                        placeholder="Add a comment..." />
                </form>

            </div>

        </div>
    )
}

export default CommentsSection

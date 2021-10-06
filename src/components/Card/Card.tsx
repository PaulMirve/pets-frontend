import React, { useState } from 'react'
import history from '../../history';
import Post from '../../types/Post';
import IconSet from '../IconSet/IconSet';
import PostImage from '../PostImage/PostImage';
import useLike from '../../hooks/like.hook';
import { useTranslation } from 'react-i18next';
import useComment from '../../hooks/comment.hook';
import TextInput from '../Form/TextInput';
import Comment from '../Comment/Comment';
import PostMenu from '../PostMenu/PostMenu';
import { useAppDispatch } from '../../hooks/hooks';
import { deletePost } from '../../actions/posts.actions';

interface IProps {
    post: Post
}
const Card: React.FC<IProps> = ({ post }) => {
    const [likesCount, postIsLiked, onLike] = useLike(post);
    const [comment, setComment, comments, commentCount, addComment] = useComment(post);
    const [description, setDescription] = useState<string>(post.description);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onPostDelete = () => {
        dispatch(deletePost(post.public_id));
    }

    return (
        <div className="card">
            <PostImage src={post.img} alt={post.public_id} frameProps={{ onDoubleClick: onLike }} />
            <div className="card__heading">
                <h5 onClick={() => history.push(`/u/${post.user.username}`)} className="card__username">
                    {post.user.username}
                </h5>
                <div className="card__menu-container">
                    <PostMenu onPostDelete={onPostDelete} onEditConfirm={(value: string) => setDescription(value)} description={description} post={post} />
                </div>
            </div>

            <IconSet onLikeClick={onLike} isLiked={postIsLiked} likesCount={likesCount} commentCount={commentCount} />
            <div className="card__description">{description}</div>
            <div className={`comment-section`}>
                <div className="comment-section__comments">
                    {
                        comments.slice(0, 2).map(comment => {
                            return <Comment key={comment.public_id} comment={comment} />
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
                            placeholder={t("add_comment")} />
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Card;

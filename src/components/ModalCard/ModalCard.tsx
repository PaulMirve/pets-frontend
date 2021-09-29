import React, { useState } from 'react'
import Heading from '../Heading/Heading';
import Post from '../../types/Post';
import Comment from '../CommentsSection/Comment';
import TextInput from '../Form/TextInput';
import { useAppDispatch } from '../../hooks/hooks';
import { postComment } from '../../actions/comments.actions';
import IconSet from '../IconSet/IconSet';

interface IProps {
    post: Post
}
const ModalCard: React.FC<IProps> = ({ post }) => {

    const dispatch = useAppDispatch();
    const [comment, setComment] = useState<string>("");

    const onCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment("");
        dispatch(postComment(comment, post.public_id));
    }

    return (
        <div className="modal-card">
            <img src={post.img} alt={post.public_id} className="modal-card__img" />
            <div className="modal-card__content">
                <div className="modal-card__headings">
                    <Heading type="subtitle">{post.user.username}</Heading>
                    <p>{post.description}</p>
                    <IconSet onLikeClick={() => { }} likesCount={post.likeCount} isLiked={false} commentCount={post.comments.length} />
                </div>
                <div className="modal-card__comments">
                    <section>
                        {
                            post.comments.map(comment => {
                                return <Comment comment={comment} />
                            })
                        }
                    </section>
                </div>
                <form onSubmit={onCommentSubmit}>
                    <TextInput value={comment} onChange={e => setComment(e.target.value)} name="comment" variant="stylized" placeholder="Add a comment..." />
                </form>
            </div>
        </div>
    )
}

export default ModalCard

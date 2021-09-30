import React, { useState, useEffect } from 'react'
import Heading from '../Heading/Heading';
import Post from '../../types/Post';
import Comment from '../CommentsSection/Comment';
import TextInput from '../Form/TextInput';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { postComment } from '../../actions/comments.actions';
import IconSet from '../IconSet/IconSet';
import CommentType from '../../types/Comment';

interface IProps {
    post: Post
}
const ModalCard: React.FC<IProps> = ({ post }) => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.posts);
    const [comment, setComment] = useState<string>("");
    const [comments, setComments] = useState<CommentType[]>(post.comments);
    const [commentsCount, setCommentsCount] = useState<number>(post.comments.length);

    const onCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setComment("");
        dispatch(postComment(comment, post.public_id));
        setCommentsCount(commentsCount + 1);
    }

    useEffect(() => {
        setComments(posts[post.public_id].comments);
    }, [posts, post.public_id]);
    return (
        <div className="modal-card">
            <img src={post.img} alt={post.public_id} className="modal-card__img" />
            <div className="modal-card__content">
                <div className="modal-card__headings">
                    <Heading type="subtitle">{post.user.username}</Heading>
                    <p>{post.description}</p>
                    <IconSet onLikeClick={() => { }} likesCount={post.likeCount} isLiked={false} commentCount={commentsCount} />
                </div>
                <div className="modal-card__comments">
                    <section>
                        {
                            comments.map((comment, index) => {
                                return <Comment key={index} comment={comment} />
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

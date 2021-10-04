import Heading from '../Heading/Heading';
import Post from '../../types/Post';
import Comment from '../Comment/Comment';
import TextInput from '../Form/TextInput';
import IconSet from '../IconSet/IconSet';
import PostImage from '../PostImage/PostImage';
import useLike from '../../hooks/like.hook';
import useComment from '../../hooks/comment.hook';
import { useTranslation } from 'react-i18next';

interface IProps {
    post: Post
}
const ModalCard: React.FC<IProps> = ({ post }) => {

    const [comment, setComment, comments, commentsCount, addComment] = useComment(post);
    const [likeCount, isLiked, onLike] = useLike(post);
    const { t } = useTranslation();


    const onCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addComment();
    }

    return (
        <div className="modal-card">
            <PostImage src={post.img} alt={post.public_id} frameProps={{ onDoubleClick: onLike }} />
            <div className="modal-card__content">
                <div className="modal-card__headings">
                    <Heading type="subtitle">{post.user.username}</Heading>
                    <p>{post.description}</p>
                    <IconSet onLikeClick={onLike} likesCount={likeCount} isLiked={isLiked} commentCount={commentsCount} />
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
                    <TextInput value={comment} onChange={e => setComment(e.target.value)} name="comment" variant="stylized" placeholder={t("add_comment")} />
                </form>
            </div>
        </div>
    )
}

export default ModalCard

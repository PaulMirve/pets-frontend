import User from "./User";
import Comment from './Comment';

type Post = {
    _id: string,
    public_id: string,
    description: string,
    dateCreated: Date,
    img: string,
    likeCount: number,
    likes: User[],
    comments: Comment[],
    user: User,
    active: boolean
}

export default Post;
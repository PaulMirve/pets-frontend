import User from '../types/User';
import Comment from '../types/Comment';

export default interface Post {
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
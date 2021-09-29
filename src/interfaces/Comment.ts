import Post from "../types/Post";
import User from "../types/User";

export default interface Comment {
    comment: string,
    dateCreated: Date,
    likeCount: number,
    likes: User[],
    user: User,
    post: Post,
    active: boolean
}
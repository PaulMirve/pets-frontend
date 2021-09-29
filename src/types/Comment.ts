import Post from "./Post";
import User from "./User";

type Comment = {
    _id: string,
    comment: string,
    dateCreated: Date,
    likeCount: number,
    likes: User[],
    user: User,
    post: Post,
    active: boolean
}

export default Comment;
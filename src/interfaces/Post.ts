import User from './User';

export default interface Post {
    _id: string,
    public_id: string,
    description: string,
    dateCreated: Date,
    img: string,
    likeCount: number,
    likes: User[]
    user: User,
    active: boolean
}
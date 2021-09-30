import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import api from '../api/api';
import Heading from '../components/Heading/Heading';
import ModalCard from '../components/ModalCard/ModalCard'
import PostLayout from '../components/PostLayout/PostLayout';
import history from '../history';
import TypePost from '../types/Post';

interface IProps {

}

interface RouteParams {
    public_id: string
}

const Post: React.FC<IProps> = () => {
    let { public_id }: RouteParams = useParams();
    const [post, setPost] = useState<TypePost>();
    const [_posts, setPosts] = useState<TypePost[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get<TypePost>(`/api/posts/${public_id}`)
            setPost(response.data);
            const posts = await api.get<TypePost[]>(`/api/posts/u/${response.data.user.username}`);
            setPosts(posts.data);
        })()

    }, [public_id]);
    return (
        <div className="post">
            {post && <ModalCard post={post} />}
            <Heading className="mb-sm mt-sm" underline type="subtitle">More post of this user</Heading>
            <PostLayout removeActual={post} slice={6} posts={_posts} onPostClick={(post: TypePost) => { history.push(`/p/${post.public_id}`) }} />
        </div>
    )
}

export default Post

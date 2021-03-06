import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import api from '../api/api';
import Heading from '../components/Heading/Heading';
import ModalCard from '../components/ModalCard/ModalCard'
import PostLayout from '../components/PostLayout/PostLayout';
import history from '../history';
import TypePost from '../types/Post';
import { useTranslation } from 'react-i18next';

interface IProps {

}

interface RouteParams {
    public_id: string
}

const Post: React.FC<IProps> = () => {
    let { public_id }: RouteParams = useParams();
    const { t } = useTranslation();
    const [post, setPost] = useState<TypePost>();
    const [_posts, setPosts] = useState<TypePost[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const _post = await api.get<TypePost>(`/api/posts/${public_id}`)
                const posts = await api.get<TypePost[]>(`/api/posts/u/${_post.data.user.username}`);
                document.title = `Pets | ${_post.data.description}`;
                setPosts(posts.data);
                setPost(_post.data);

            } catch {
                history.push('/error');
            }
        })();
        return () => {
            setPosts([]);
        }
    }, [public_id]);
    return (
        <div className="post">
            {post && <ModalCard post={post} />}
            <Heading className="mb-sm mt-sm" underline type="subtitle">{t("post.more_posts")}</Heading>
            <PostLayout removeActual={post} slice={6} posts={_posts} onPostClick={(post: TypePost) => { history.push(`/p/${post.public_id}`) }} />
        </div>
    )
}

export default Post

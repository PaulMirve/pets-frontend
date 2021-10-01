import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../api/api';
import Heading from '../components/Heading/Heading';
import Modal from '../components/Modal/Modal';
import ModalCard from '../components/ModalCard/ModalCard';
import PostLayout from '../components/PostLayout/PostLayout';
import Post from '../types/Post';

interface IProps {

}

interface RouteParams {
    username: string
}

const Profile: React.FC<IProps> = () => {
    let { username }: RouteParams = useParams();
    const [posts, setPosts] = useState<Post[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [postSelected, setPostSelected] = useState<Post>();

    useEffect(() => {
        document.title = `Pets | ${username}`;
        (async () => {
            const posts = await api.get<Post[]>(`/api/posts/u/${username}`);
            setPosts(posts.data);
        })();
        return () => setPosts([]);
    }, [username]);

    const onModalOpen = (post: Post) => {
        setOpen(true);
        setPostSelected(post);
        window.history.pushState("", "", `/p/${post.public_id}`);
    }

    const onModalClose = () => {
        setOpen(false);
        window.history.pushState("", "", `/u/${username}`);
    }
    return (
        <div className="profile">
            <Heading centered>{username}</Heading>
            <PostLayout posts={posts} onPostClick={onModalOpen} />
            <Modal visible={open} onClose={onModalClose}>
                {
                    postSelected && <ModalCard post={postSelected} />
                }
            </Modal>
        </div>
    )
}

export default Profile

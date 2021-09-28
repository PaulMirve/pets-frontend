import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../api/api';
import Heading from '../components/Heading/Heading';
import Modal from '../components/Modal/Modal';
import Post from '../interfaces/Post';
import IconChatBubbleElipsesOutline from '../svg/IconChatBubbleElipsesOutline';
import IconHeartOutline from '../svg/IconHeartOutline';

interface IProps {

}

interface RouteParams {
    username: string
}

const Profile: React.FC<IProps> = ({ }) => {
    let { username }: RouteParams = useParams();
    const [posts, setPosts] = useState<Post[]>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [postSelected, setPostSelected] = useState<Post>();

    useEffect(() => {
        (async () => {
            const posts = await api.get<Post[]>(`/api/posts/u/${username}`);
            console.log(posts.data)
            setPosts(posts.data);
        })()
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
            <div className="profile__grid">
                {
                    posts.map(post => {
                        return <div
                            key={post.public_id}
                            onClick={() => onModalOpen(post)}>
                            <img src={post.img} alt={post.public_id} className="profile__img" />
                        </div>
                    })
                }
            </div>
            <Modal visible={open} onClose={onModalClose}>
                <div className="profile__modal">
                    <img className="profile__modal__img" src={postSelected?.img} alt={postSelected?.public_id} />
                    <div className="profile__modal__content">
                        <Heading centered type="subtitle">{postSelected?.user.username}</Heading>
                        <div className="profile__modal__icons">
                            <div className="profile__modal__icon-box">
                                <IconHeartOutline />
                                {postSelected?.likeCount}
                            </div>
                            <div className="profile__modal__icon-box">
                                <IconChatBubbleElipsesOutline />
                                9
                            </div>
                        </div>
                        <p className="profile__modal__description">
                            {postSelected?.description}
                        </p>
                    </div>
                    {/* <figure className="profile__modal__frame">
                        <img className="profile__modal__img" src={postSelected?.img} alt={postSelected?.public_id} />
                    </figure>
                    <div className="profile__modal__content">
                        <Heading centered type="subtitle">{postSelected?.user.username}</Heading>
                        <div className="profile__modal__icons">
                            <div className="profile__modal__icon-box">
                                <IconHeartOutline />
                                {postSelected?.likeCount}
                            </div>
                            <div className="profile__modal__icon-box">
                                <IconChatBubbleElipsesOutline />
                                9
                            </div>
                        </div>
                        <p className="profile__modal__description">
                            {postSelected?.description}
                        </p>
                    </div> */}
                </div>
            </Modal>
        </div>
    )
}

export default Profile

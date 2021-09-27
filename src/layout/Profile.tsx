import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import api from '../api/api';
import Heading from '../components/Heading/Heading';
import Post from '../interfaces/Post';

interface IProps {

}

interface RouteParams {
    username: string
}

const Profile: React.FC<IProps> = ({ }) => {
    let { username }: RouteParams = useParams();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const posts = await api.get<Post[]>(`/api/posts/u/${username}`);
            setPosts(posts.data);
        })()
    }, [])
    return (
        <div className="profile">
            <Heading centered>{username}</Heading>
            <div className="profile__grid">
                {
                    posts.map(post => {
                        return <img key={post.public_id} src={post.img} alt={post.public_id} className="profile__img" />
                    })
                }
            </div>

        </div>
    )
}

export default Profile

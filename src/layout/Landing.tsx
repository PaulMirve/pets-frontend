import React from 'react'
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';
import { useAppSelector } from '../hooks/hooks';
const Landing = () => {
    const state = useAppSelector(state => state);
    return (
        <main className="landing">
            <div className="landing__layout">
                {
                    state.posts.map(post => {
                        return <Card post={post} key={post._id} />
                    })
                }
            </div>
            <div className="landing__news">
                <div className="landing__newer">
                    <Heading type="subtitle">New posts</Heading>
                </div>
                <div className="landing__likes">
                    <Heading type="subtitle">Most liked photos</Heading>
                </div>
            </div>
        </main>
    )
}

export default Landing;
import React from 'react'
import Card from '../components/Card/Card';
import { useAppSelector } from '../hooks/hooks';
const Landing = () => {
    const state = useAppSelector(state => state);
    return (
        <main>
            <div className="landing__layout">
                {
                    state.posts.map(post => {
                        return <Card post={post} key={post._id} />
                    })
                }
            </div>
        </main>
    )
}

export default Landing;
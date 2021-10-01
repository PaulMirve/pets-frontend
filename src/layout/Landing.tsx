import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';
import history from '../history';
import { useAppSelector } from '../hooks/hooks';
const Landing = () => {
    const state = useAppSelector(state => state);
    const { t } = useTranslation();

    useEffect(() => {
        document.title = "Pets";
    });

    return (
        <main className="landing">
            <div className="landing__layout">
                {
                    Object.values(state.posts).map(post => {
                        return <Card post={post} key={post.public_id} />
                    })
                }
            </div>
            <div className="landing__news-container">
                <div className="landing__news">
                    <div className="landing__newer">
                        <Heading underline type="subtitle">{t("landing.new_posts")}</Heading>
                        {
                            Object.values(state.posts).slice(0, 8).map(post => {
                                return <h5 onClick={() => history.push(`/p/${post.public_id}`)} key={post.public_id}>{post.description}</h5>
                            })
                        }
                    </div>
                    <div className="landing__likes">
                        <Heading underline type="subtitle">{t("landing.most_liked_photos")}</Heading>
                        {
                            Object.values(state.posts).sort((a, b) => b.likeCount - a.likeCount).slice(0, 8).map(post => {
                                return <h5 onClick={() => history.push(`/p/${post.public_id}`)} key={post.public_id}>{post.description}</h5>
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Landing;
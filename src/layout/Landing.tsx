import React from 'react'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';
import { useAppSelector } from '../hooks/hooks';
const Landing = () => {
    const state = useAppSelector(state => state);
    const { t } = useTranslation();
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
                    <Heading type="subtitle">{t("landing.new_posts")}</Heading>
                </div>
                <div className="landing__likes">
                    <Heading type="subtitle">{t("landing.most_liked_photos")}</Heading>
                </div>
            </div>
        </main>
    )
}

export default Landing;
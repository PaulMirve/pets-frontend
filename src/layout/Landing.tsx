import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';
import history from '../history';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { fetchPost } from '../actions/posts.actions';
const Landing = () => {
    const { posts, count } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    useEffect(() => {
        (async () => {
            try {
                await dispatch(fetchPost()).catch();
            } catch {
                history.push('/error500');
            }
        })();
        document.title = "Pets";

    },[dispatch]);

    const onSeeMoreClick = async () => {
        dispatch(fetchPost(5, Object.values(posts).length));
    }

    return (
        <main className="landing">
            <div className="landing__layout">
                {
                    Object.values(posts).map(post => {
                        return <Card post={post} key={post.public_id} />
                    })
                }
                <div className="landing__more">
                    {
                        count === Object.values(posts).length ? "There are not most posts to see" : <button onClick={onSeeMoreClick}>  See more...</button>
                    }
                </div>
            </div>
            <div className="landing__news-container">
                <div className="landing__news">
                    <div className="landing__newer">
                        <Heading underline type="subtitle">{t("landing.new_posts")}</Heading>
                        {
                            Object.values(posts).slice(0, 8).map(post => {
                                return <h5 onClick={() => history.push(`/p/${post.public_id}`)} key={post.public_id}>{post.description}</h5>
                            })
                        }
                    </div>
                    <div className="landing__likes">
                        <Heading underline type="subtitle">{t("landing.most_liked_photos")}</Heading>
                        {
                            Object.values(posts).sort((a, b) => b.likeCount - a.likeCount).slice(0, 8).map(post => {
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
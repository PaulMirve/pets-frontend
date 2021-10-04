import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import Card from '../components/Card/Card';
import Heading from '../components/Heading/Heading';
import history from '../history';
import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { fetchPost } from '../actions/posts.actions';
import LoadingPage from '../components/LoadingPage/LoadingPage';
const Landing = () => {
    const { posts, count } = useAppSelector(state => state.posts);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                await dispatch(fetchPost(10)).catch();
            } catch {
                history.push('/error500');
            }
        })().then(() => {
            setLoading(false);
        });
        document.title = "Pets";
        return () => setLoading(false);
    }, [dispatch]);

    const onSeeMoreClick = async () => {
        dispatch(fetchPost(5, Object.values(posts).length));
    }

    if (!loading) {
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
                            count === Object.values(posts).length ? t("landing.no_more_posts") : <button onClick={onSeeMoreClick}>{t("landing.see_more")}</button>
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
    } else {
        return <LoadingPage />
    }

}

export default Landing;
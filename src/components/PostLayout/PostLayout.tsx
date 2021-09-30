import React from 'react'
import Post from '../../types/Post'
import PostImage from '../PostImage/PostImage';

interface IProps {
    posts: Post[],
    onPostClick: (post: Post) => void,
    slice?: number,
    offset?: number,
    removeActual?: Post
}

const PostLayout: React.FC<IProps> = ({ removeActual, offset = 0, slice, posts, onPostClick }) => {
    const getPosts = (): Post[] => {
        if (removeActual) {
            posts = posts.filter(post => post.public_id !== removeActual.public_id);
        }
        return posts.slice(offset, (slice ? slice : posts.length))
    }
    return (
        <div className="post-layout">
            {
                getPosts().map(post => {
                    return <PostImage frameProps={{ onClick: () => onPostClick(post) }} key={post.public_id} src={post.img} alt={post.public_id} />
                })
            }
        </div>
    )
}

export default PostLayout

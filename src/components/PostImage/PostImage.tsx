import React, { useEffect } from 'react'
import IconHeart from '../../svg/IconHeart'

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    frameProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    likeabe?: boolean
}

const PostImage: React.FC<IProps> = ({ likeabe, frameProps, src, alt, ...props }) => {
    return (
        <div className={`post-image ${frameProps?.className}`} {...frameProps}>
            <img src={src} alt={alt} {...props} />
            <IconHeart className="post-image__icon" />
        </div>
    )
}

export default PostImage

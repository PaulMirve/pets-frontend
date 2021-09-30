import React from 'react'
import IconHeart from '../../svg/IconHeart'

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    frameProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    likeabe?: boolean
}

const imgDoubleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const element = event.currentTarget;
    element.classList.add('post-image__liked');
    setTimeout((el) => {
        element.classList.remove('post-image__liked');
    }, 2000);
}

const PostImage: React.FC<IProps> = ({ likeabe, frameProps, src, alt, ...props }) => {
    return (
        <div className={`post-image ${frameProps?.className}`} {...frameProps}>
            <img onDoubleClick={imgDoubleClick} src={src} alt={alt} {...props} />
            <IconHeart className="post-image__icon" />
        </div>
    )
}

export default PostImage

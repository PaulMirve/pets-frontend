import React from 'react'

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    frameProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
}

const PostImage: React.FC<IProps> = ({ frameProps, src, alt, ...props }) => {
    return (
        <div className={`post-image ${frameProps?.className}`} {...frameProps}>
            <img src={src} alt={alt} {...props} />
        </div>
    )
}

export default PostImage

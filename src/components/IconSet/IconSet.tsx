import React from 'react'
import IconHeart from '../../svg/IconHeart'
import IconHeartOutline from '../../svg/IconHeartOutline'
import IconChatBubbleElipsesOutline from '../../svg/IconChatBubbleElipsesOutline';

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isLiked: boolean,
    likesCount: number,
    commentCount: number,
    onLikeClick: () => void
}

const IconSet: React.FC<IProps> = ({ onLikeClick, commentCount, likesCount, isLiked, className, ...props }) => {
    return (
        <div className="icon-set" {...props}>
            <div className="icon-set__icon">
                {isLiked ? <IconHeart onClick={onLikeClick} /> : <IconHeartOutline onClick={onLikeClick} />}
                <span>{likesCount}</span>
            </div>
            <div className="icon-set__icon">
                <IconChatBubbleElipsesOutline />
                <span>{commentCount}</span>
            </div>
        </div>
    )
}

export default IconSet

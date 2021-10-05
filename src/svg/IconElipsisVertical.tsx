import React, { SVGProps } from 'react'

const IconElipsisVertical: React.FC<SVGProps<SVGSVGElement>> = ({ className = "", ...rest }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`ionicon ${className}`} viewBox="0 0 512 512" {...rest}>
            <title>Ellipsis Vertical</title>
            <circle cx="256" cy="256" r="48" />
            <circle cx="256" cy="416" r="48" />
            <circle cx="256" cy="96" r="48" />
        </svg>
    )
}

export default IconElipsisVertical

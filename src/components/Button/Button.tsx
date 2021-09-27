import React from 'react'
interface IProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
    fullwidth?: boolean
}
const Button: React.FC<IProps> = ({ children, style, className = "", fullwidth }) => {
    return (
        <button className={`btn ${className} ${fullwidth && 'fullwidth'}`} style={style}>
            {children}
        </button>
    )
}

export default Button

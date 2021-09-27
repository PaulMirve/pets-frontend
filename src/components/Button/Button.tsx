import React from 'react'
interface IProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
}
const Button: React.FC<IProps> = ({ children, style, className = "" }) => {
    return (
        <button className={`btn ${className}`} style={style}>
            {children}
        </button>
    )
}

export default Button

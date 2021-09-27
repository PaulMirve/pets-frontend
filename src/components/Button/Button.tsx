import React, { InputHTMLAttributes } from 'react'
interface IProps extends InputHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    style?: React.CSSProperties,
    className?: string,
    fullwidth?: boolean,
    type?: "primary" | "small",
    variant?: "filled" | "outlined"
}
const Button: React.FC<IProps> = ({ children, style, className = "", fullwidth, type, variant, ...rest }) => {
    const getType = () => {
        switch (type) {
            case "small":
                return "btn--small"
            default:
                return "";
        }
    }

    const getVariant = () => {
        switch (variant) {
            case "outlined":
                return "btn--outlined"
            default:
                return "";
        }
    }
    return (
        <button className={`btn ${getType()} ${getVariant()} ${className} ${fullwidth ? 'fullwidth' : ''}`} style={style} {...rest}>
            {children}
        </button>
    )
}

export default Button

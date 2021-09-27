import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLFormElement> {
    style?: React.CSSProperties,
    className?: string,
}

const Form: ForwardRefRenderFunction<HTMLFormElement, IProps> = ({ children, style, className = "", ...rest }) => {
    return (
        <form className={`form ${className}`} style={style} {...rest}>
            {children}
        </form>
    )
}

export default Form;
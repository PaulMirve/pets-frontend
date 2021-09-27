import React, { ForwardRefRenderFunction, InputHTMLAttributes, useState } from 'react'

interface IProps extends InputHTMLAttributes<HTMLFormElement> {
    style?: React.CSSProperties,
    className?: string,
}

const Form: ForwardRefRenderFunction<HTMLFormElement, IProps> = ({ children, style, className = "", ...rest }) => {
    const [name, setName] = useState<string>("");
    return (
        <form className={`form ${className}`} style={style} {...rest}>
            {children}
        </form>
    )
}

export default Form;
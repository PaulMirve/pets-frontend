import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    style?: React.CSSProperties,
    className?: string,
    placeholder?: string,
    fullwidth?: boolean
}

const TextInput: ForwardRefRenderFunction<HTMLInputElement, IProps> = ({ name, style, className = "", placeholder, fullwidth, ...otherProps }, ref) => {
    return (
        <input
            className={`form__input ${className} ${fullwidth && 'fullwidth'}`}
            style={style}
            placeholder={placeholder}
            {...otherProps}
            name={name} />
    )
}

export default TextInput

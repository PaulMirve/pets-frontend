import React from 'react'

const TextArea: React.FC<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>> = ({ className, ...rest }) => {
    return (
        <textarea className={`form__textarea ${className}`} {...rest} />
    )
}

export default TextArea;

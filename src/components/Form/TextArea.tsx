import React from 'react'

interface Props extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    fullwidth?: boolean
}

const TextArea = ({ fullwidth, className, ...rest }: Props) => {
    return (
        <textarea className={`form__textarea ${className} ${fullwidth ? "form__textarea--fullwidth" : ""}`} {...rest} />
    )
}

export default TextArea;

import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import IconCaretForwardOutline from '../../svg/IconCaretForwardOutline';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    style?: React.CSSProperties,
    className?: string,
    placeholder?: string,
    fullwidth?: boolean,
    variant?: "default" | "stylized"
}

const TextInput: ForwardRefRenderFunction<HTMLInputElement, IProps> = ({ name, style, className = "", placeholder, fullwidth, variant, ...otherProps }, ref) => {
    const getStyle = (): string => {
        switch (variant) {
            case "stylized":
                return "form__input--stylized";
            default:
                return " ";
        }
    }

    return (
        <div className="form__input-wrapper">
            <input
                className={`form__input ${className} ${getStyle()} ${fullwidth ? 'fullwidth' : ""}`}
                style={style}
                placeholder={placeholder}
                {...otherProps}
                name={name} />
            {
                variant === "stylized" &&
                <button className="form__input__button">
                    <IconCaretForwardOutline />
                </button>
            }
        </div>

    )
}

export default TextInput

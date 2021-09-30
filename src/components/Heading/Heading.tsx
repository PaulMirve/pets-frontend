import React from 'react'

interface IProps {
    style?: React.CSSProperties,
    className?: string,
    children?: React.ReactNode,
    type?: "primary" | "subtitle",
    centered?: boolean,
    family?: "roboto" | "pacifico",
    underline?: boolean
}

const Heading: React.FC<IProps> = ({ underline, style, className = "", children, type, centered, family }) => {

    const getType = () => {
        switch (type) {
            case "subtitle":
                return "heading--subtitle";
            default:
                return "heading--primary";
        }
    }

    const getFamily = () => {
        switch (family) {
            case "roboto":
                return "heading--roboto";
            default:
                return " ";
        }
    }

    return (
        <h1
            className={`heading ${getType()} ${getFamily()} ${className} ${centered && 'text-align-center'} ${underline ? 'heading--underline' : ''}`}
            style={style}>
            {children}
        </h1>
    )
}

export default Heading

import React from 'react'

interface IProps {
    style?: React.CSSProperties,
    className?: string,
    children?: React.ReactNode,
    type?: "primary" | "subtitle",
    centered?: boolean,
    family?: "roboto" | "pacifico"
}

const Heading: React.FC<IProps> = ({ style, className = "", children, type, centered, family }) => {

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
        <h1 className={`heading ${getType()} ${getFamily()} ${className} ${centered && 'text-align-center'}`} style={style}>
            {children}
        </h1>
    )
}

export default Heading

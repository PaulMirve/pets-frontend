import React from 'react'

interface IProps {
    style?: React.CSSProperties,
    className?: string,
    children?: React.ReactNode,
    type?: "primary" | "secondary",
    centered?: boolean
}

const Heading: React.FC<IProps> = ({ style, className = "", children, type, centered }) => {

    const getType = () => {
        switch (type) {
            default:
                return "heading--primary";
        }
    }

    return (
        <h1 className={`heading ${getType()} ${className} ${centered && 'text-align-center'}`} style={style}>
            {children}
        </h1>
    )
}

export default Heading

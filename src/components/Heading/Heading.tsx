import React from 'react'

interface IProps {
    style?: React.CSSProperties,
    className?: string,
    children?: React.ReactNode,
    type?: "primary" | "secondary"
}

const Heading: React.FC<IProps> = ({ style, className = "", children, type }) => {

    const getType = () => {
        switch (type) {
            default:
                return "heading--primary";
        }
    }

    return (
        <h1 className={`heading ${getType()} ${className}`} style={style}>
            {children}
        </h1>
    )
}

export default Heading

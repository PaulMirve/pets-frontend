import React, { HTMLAttributes, useEffect } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    open: boolean,
    parent?: React.ReactNode,
}

const Menu: React.FC<IProps> = ({ children, open, className = " ", style }) => {
    useEffect(() => {

    }, [])

    return (
        <div className={`menu ${open && 'menu--active'} ${className}`} style={style}>
            <div className="menu__content">
                {children}
            </div>
        </div>
    )
}

export default Menu;

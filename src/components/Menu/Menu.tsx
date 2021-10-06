import React, { HTMLAttributes } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode,
    open: boolean,
    parent?: React.ReactNode,
    color?: "light" | "dark"
}

const Menu: React.FC<IProps> = ({ color, children, open, className = " ", style }) => {
    const getColor = () => {
        switch (color) {
            case "dark":
                return "menu--dark";
            default:
                return "";
        }
    }

    return (
        <div className={`menu ${open && 'menu--active'} ${getColor()} ${className}`} style={style}>
            <div className="menu__content">
                {children}
            </div>
        </div>
    )
}

export default Menu;

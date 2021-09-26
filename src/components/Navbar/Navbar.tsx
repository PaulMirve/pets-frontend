import React from 'react';
import IconHome from '../../svg/IconHome';
interface IProps {

}

const Navbar: React.FC<IProps> = () => {
    return (
        <nav className="navbar">
            <h3 className="navbar__title">Pets</h3>
            <div className="navbar__actions">
                <IconHome className="navbar__icon" />
                <div className="navbar__user">
                    PM
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

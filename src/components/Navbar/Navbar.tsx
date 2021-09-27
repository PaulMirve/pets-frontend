import React from 'react';
import IconHome from '../../svg/IconHome';
import IconLogo from '../../svg/IconLogo';
interface IProps {

}

const Navbar: React.FC<IProps> = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <IconLogo className="navbar__logo" />
                <h3 className="navbar__title">Pets</h3>
            </div>
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

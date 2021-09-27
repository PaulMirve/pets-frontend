import React from 'react';
import history from '../../history';
import IconHome from '../../svg/IconHome';
import IconLogo from '../../svg/IconLogo';
import { useAppSelector } from '../../hooks/hooks';
import Button from '../Button/Button';
interface IProps {

}

const Navbar: React.FC<IProps> = () => {
    const user = useAppSelector(state => state.user);
    return (
        <nav className="navbar">
            <div onClick={() => history.push('/')} className="navbar__container">
                <IconLogo className="navbar__logo" />
                <h3 className="navbar__title">Pets</h3>
            </div>
            <div className="navbar__actions">
                <IconHome className="navbar__icon" />
                {
                    user ?
                        <div className="navbar__user">
                            PM
                        </div>
                        :
                        <>
                            <Button onClick={() => history.push('/login')} variant="outlined" type="small">Login</Button>
                            <Button onClick={() => history.push('/signin')} variant="outlined" type="small">Sign In</Button>
                        </>
                }

            </div>
        </nav>
    )
}

export default Navbar;

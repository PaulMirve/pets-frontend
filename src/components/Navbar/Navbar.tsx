import React, { useState } from 'react';
import history from '../../history';
import IconLogo from '../../svg/IconLogo';
import { useAppSelector } from '../../hooks/hooks';
import Button from '../Button/Button';
import User from '../../types/User';
import IconLogoutOutline from '../../svg/IconLogoutOutline';
import IconPersonCircleOutline from '../../svg/IconPersonCircleOutline';
import IconAddCircleOutline from '../../svg/IconAddCircleOutline';
import Menu from '../Menu/Menu';
import { useTranslation } from 'react-i18next';
import IconLanguageOutline from '../../svg/IconLanguageOutline';
import IconHelpCircleOutline from '../../svg/IconHelpCircleOutline';

const Navbar = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [languagesOpen, setLanguagesOpen] = useState<boolean>(false);
    let user: User | null = useAppSelector(state => state.user);

    const getInitials = () => {
        if (user) {
            return `${user.name[0]}${user.lastName[0]}`
        }
    }

    const onLogOut = () => {
        localStorage.clear();
        window.location.reload();
    }

    const onAvatarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setMenuOpen(!menuOpen);
    }

    const updateLanguage = (lang: "en" | "es") => {
        document.cookie = `i18next=${lang}`;
        window.location.reload();
    }

    return (
        <nav className="navbar">
            <div onClick={() => history.push('/')} className="navbar__container">
                <IconLogo className="navbar__logo" />
                <h3 className="navbar__title">Pets</h3>
            </div>
            <div className="navbar__actions">
                <span>
                    <IconLanguageOutline onClick={e => { setLanguagesOpen(!languagesOpen) }} className="navbar__icon" />
                    <Menu open={languagesOpen}>
                        <button onClick={() => updateLanguage("es")} className="navbar__menu-item">
                            Spanish
                        </button>
                        <button style={{ marginTop: '1rem' }} onClick={() => updateLanguage("en")} className="navbar__menu-item">
                            English
                        </button>
                    </Menu>
                </span>

                <IconHelpCircleOutline className="navbar__icon" />
                {user ?
                    <>
                        <IconAddCircleOutline onClick={() => history.push('/add')} className="navbar__icon" />
                        <div onClick={onAvatarClick} className="navbar__user">
                            {getInitials()}
                            <Menu open={menuOpen}>
                                <button onClick={() => history.push(`/u/${user?.username}`)} className="navbar__menu-item">
                                    <IconPersonCircleOutline />
                                    {t("profile")}
                                </button>
                                <button onClick={onLogOut} className="navbar__menu-item">
                                    <IconLogoutOutline />
                                    {t("logout")}
                                </button>
                            </Menu>
                        </div>
                    </>
                    :
                    <>
                        <Button onClick={() => history.push('/login')} variant="outlined" type="small">{t("login")}</Button>
                        <Button onClick={() => history.push('/signin')} variant="outlined" type="small">{t("sign_in")}</Button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;

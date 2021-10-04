import React from 'react'
import Heading from '../components/Heading/Heading';
import LogoSweating from '../svg/LogoSweating';
import { useTranslation } from 'react-i18next';

const Error404 = () => {
    const {t} = useTranslation();
    return (
        <main className="error404">
            <span>
                <LogoSweating />
                <Heading centered>{t("error_404.message")}</Heading>
            </span>
        </main>
    )
}

export default Error404

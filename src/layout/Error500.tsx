import React from 'react'
import Heading from '../components/Heading/Heading';
import LogoError from '../svg/LogoError';
import { useTranslation } from 'react-i18next';

const Error500 = () => {
    const { t } = useTranslation();
    return (
        <div className="error500">
            <span>
                <LogoError />
                <Heading centered>{t("error_500.message")}</Heading>
            </span>
        </div>
    )
}

export default Error500

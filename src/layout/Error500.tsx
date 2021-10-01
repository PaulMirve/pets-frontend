import React from 'react'
import Heading from '../components/Heading/Heading';
import LogoError from '../svg/LogoError';

interface Props {

}

const Error500 = (props: Props) => {
    return (
        <div className="error500">
            <span>
                <LogoError />
                <Heading centered>An error has happen, please contact the administrator.</Heading>
            </span>
        </div>
    )
}

export default Error500

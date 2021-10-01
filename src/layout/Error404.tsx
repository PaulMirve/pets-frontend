import React from 'react'
import Heading from '../components/Heading/Heading';
import LogoSweating from '../svg/LogoSweating';

interface Props {

}

const Error404 = (props: Props) => {
    return (
        <main className="error404">
            <span>
                <LogoSweating />
                <Heading centered>The link you entered doesn't exists. Please go back to the main page.</Heading>
            </span>
        </main>
    )
}

export default Error404

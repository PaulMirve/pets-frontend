import React from 'react'
import IconLogo from '../../svg/IconLogo'
import Heading from '../Heading/Heading'

const LoadingPage = () => {
    return (
        <div className="loading-page">
            <div>
                <IconLogo />
                <Heading>Loading<span></span><span></span><span></span></Heading>
            </div>
        </div>
    )
}

export default LoadingPage

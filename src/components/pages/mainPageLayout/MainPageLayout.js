import React from 'react'
import Navbar from '../../navbar/Navbar'

// eslint-disable-next-line react/prop-types
const MainPageLayout = ({ children }) => {
    return (
        <div className={'mainPageLayout'}>
            <Navbar />

            <div className="mainPageLayout__content">{children}</div>
        </div>
    )
}

export default MainPageLayout

import React from 'react'
import { Link } from 'react-router-dom'
import ThumbnailOptions from './ThumbnailOptions'

const CampaignThumbnail = () => {
    return (
        <Link className={'campaignThumbnail'}>
            <p className={'campaign__status'}>Status</p>
            <h3 className={'campaign__name'}>Campaign&apos;s name</h3>
            <p className={'campaign__id'}>
                43746d72-6117-4778-a953-1b376a44eac0
            </p>
            <ThumbnailOptions />
        </Link>
    )
}

export default CampaignThumbnail

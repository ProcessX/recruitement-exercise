import React from 'react'
import CampaignThumbnail from './CampaignThumbnail'
import PropTypes from 'prop-types'

const CampaignList = ({ list }) => {
    const renderList = () => {
        //return <ul> {list.map((campaign) => {<li key={campaign.id}>Campaign</li>})} </ul>
        {
            console.log(list)
        }
        return (
            <ul className={'campaignThumbnail__li'}>
                <li className={'campaignThumbnail__el'}>
                    <CampaignThumbnail />
                </li>
            </ul>
        )
    }

    return (
        <div className={'campaignList'}>
            CampaignList
            {renderList()}
            <ul className={'campaignThumbnail__li'}>
                <li className={'campaignThumbnail__el'}>
                    <CampaignThumbnail />
                </li>
                <li className={'campaignThumbnail__el'}>
                    <CampaignThumbnail />
                </li>
                <li className={'campaignThumbnail__el'}>
                    <CampaignThumbnail />
                </li>
                <li className={'campaignThumbnail__el'}>
                    <CampaignThumbnail />
                </li>
            </ul>
        </div>
    )
}

export default CampaignList

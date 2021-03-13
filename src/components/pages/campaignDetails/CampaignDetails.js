import React from 'react';
import BtnBack from '../../btn/BtnBack';
import CampaignInfoSection from '../../campaignInfoSection/CampaignInfoSection';
import IdentifiersBlock from '../../campaignInfoSection/IdentifiersBlock';
import SingleBlock from '../../campaignInfoSection/SingleBlock';
import SlotsBlock from '../../campaignInfoSection/SlotsBlock';
import TargetsBlock from '../../campaignInfoSection/TargetsBlock';
import ViewsDetailBlock from '../../campaignInfoSection/ViewsDetailBlock';
import MainPageLayout from '../mainPageLayout/MainPageLayout';

const CampaignDetails = () => {
    return (
        <MainPageLayout>
            <div className={'campaignDetails'}>
                <BtnBack />

                <CampaignInfoSection title={'General'}>
                    <IdentifiersBlock>
                        <h4 className={'campaign__name'}>Campaign name</h4>
                        <p className={'campaign__id'}>ID</p>
                        <div className={'info'}>
                            <SingleBlock title={'Status'} value={'value'} />
                            <SingleBlock title={'Source'} value={'value'} />
                            <SingleBlock title={'Budget'} value={'value'} />
                        </div>
                    </IdentifiersBlock>
                    <TargetsBlock />
                </CampaignInfoSection>

                <CampaignInfoSection title={'Stats'}>
                    <SingleBlock title={'Expected views'} value={'value'} />
                    <SingleBlock title={'Real views'} value={'value'} />
                    <SingleBlock title={'Unique visitors'} value={'value'} />
                    <SingleBlock title={'Visitor total'} value={'value'} />
                    <ViewsDetailBlock />
                </CampaignInfoSection>

                <CampaignInfoSection title={'Diffusion'}>
                    <div className={'diffusion__dates'}>
                        <SingleBlock title={'From'} value={'value'} />
                        <SingleBlock title={'To'} value={'value'} />
                    </div>
                    <SlotsBlock />
                </CampaignInfoSection>
            </div>
        </MainPageLayout>
    )
}

export default CampaignDetails

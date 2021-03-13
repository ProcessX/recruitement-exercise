import React, { Fragment, useEffect, useState } from "react";
import BtnBack from "../../btn/BtnBack";
import CampaignInfoGeneral from "../../campaignInfo/CampaignInfoGeneral";
import CampaignInfoSection from "../../campaignInfo/CampaignInfo";
import SingleBlock from "../../campaignInfo/SingleBlock";
import SlotsBlock from "../../campaignInfo/SlotsBlock";
import ViewsDetailBlock from "../../campaignInfo/ViewsDetailBlock";
import MainPageLayout from "../mainPageLayout/MainPageLayout";
import CampaignInfoStats from "../../campaignInfo/CampaignInfoStats";

const CampaignDetails = () => {
  const [campaign, setCampaign] = useState({});

  const APIURL =
    "https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns/";

  useEffect(() => {
    if (Object.keys(campaign).length === 0 && campaign.constructor === Object) {
      let urlParams = new URLSearchParams(window.location.search);
      fetchCampaign(urlParams.get("id"));
    }
  }, [campaign]);

  const fetchCampaign = (campaignID) => {
    fetch(`${APIURL}${campaignID}`)
      .then((r) => r.json())
      .then((result) => {
        setCampaign(result);
        console.log(result);
      });
  };

  const renderCampaignDetails = () => {
    if (Object.keys(campaign).length === 0 && campaign.constructor === Object) {
      return <p>Empty</p>;
    } else {
      return (
        <Fragment>
          <CampaignInfoGeneral campaign={campaign} />
          <CampaignInfoStats
            views={campaign.statistics.views}
            clicks={campaign.statistics.clicks}
          />
          {renderDiffusion()}
        </Fragment>
      );
    }
  };

  const renderDiffusion = () => {
    return (
      <CampaignInfoSection title={"Diffusion"}>
        <SingleBlock title={"From"} value={"value"} />
        <SingleBlock title={"To"} value={"value"} />
        <SlotsBlock />
      </CampaignInfoSection>
    );
  };

  const getViewsTotal = (counts) => {
    return counts.reduce((a, val) => {
      return a + val;
    });
  };

  return (
    <MainPageLayout>
      <div className={"campaignDetails"}>
        <BtnBack />

        {renderCampaignDetails()}
      </div>
    </MainPageLayout>
  );
};

export default CampaignDetails;

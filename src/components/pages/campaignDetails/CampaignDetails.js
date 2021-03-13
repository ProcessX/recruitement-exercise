import React, { Fragment, useEffect, useState } from "react";
import BtnBack from "../../btn/BtnBack";
import CampaignInfoSection from "../../campaignInfoSection/CampaignInfoSection";
import IdentifiersBlock from "../../campaignInfoSection/IdentifiersBlock";
import SingleBlock from "../../campaignInfoSection/SingleBlock";
import SlotsBlock from "../../campaignInfoSection/SlotsBlock";
import TargetsBlock from "../../campaignInfoSection/TargetsBlock";
import ViewsDetailBlock from "../../campaignInfoSection/ViewsDetailBlock";
import MainPageLayout from "../mainPageLayout/MainPageLayout";

const CampaignDetails = () => {
  const [campaign, setCampaign] = useState({});
  //const [campaignID, setCampaignID] = useState("");

  const APIURL =
    "https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns/";

  useEffect(() => {
    if (Object.keys(campaign).length === 0 && campaign.constructor === Object) {
      console.log(campaign);
      let urlParams = new URLSearchParams(window.location.search);
      fetchCampaign(urlParams.get("id"));
    }
  }, [campaign]);

  const fetchCampaign = (campaignID) => {
    console.log(`${APIURL}${campaignID}`);
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
          {renderGeneral()}
          {renderStats()}
          {renderDiffusion()}
        </Fragment>
      );
    }
  };

  const renderGeneral = () => {
    return (
      <CampaignInfoSection title={"General"}>
        <IdentifiersBlock>
          <h4 className={"campaign__name"}>Test</h4>
          <p className={"campaign__id"}>id</p>
          <div className={"info"}>
            <SingleBlock title={"Status"} value={"value"} />
            <SingleBlock title={"Source"} value={"value"} />
            <SingleBlock title={"Budget"} value={"value"} />
          </div>
        </IdentifiersBlock>
        <TargetsBlock />
      </CampaignInfoSection>
    );
  };

  const renderStats = () => {
    return (
      <CampaignInfoSection title={"Stats"}>
        <SingleBlock title={"Expected views"} value={"value"} />
        <SingleBlock title={"Real views"} value={"value"} />
        <SingleBlock title={"Unique visitors"} value={"value"} />
        <SingleBlock title={"Visitor total"} value={"value"} />
        <ViewsDetailBlock />
      </CampaignInfoSection>
    );
  };

  const renderDiffusion = () => {
    return (
      <CampaignInfoSection title={"Diffusion"}>
        <div className={"diffusion__dates"}>
          <SingleBlock title={"From"} value={"value"} />
          <SingleBlock title={"To"} value={"value"} />
        </div>
        <SlotsBlock />
      </CampaignInfoSection>
    );
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

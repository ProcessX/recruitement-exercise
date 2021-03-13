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
          {renderGeneral()}
          {renderStats()}
          {renderDiffusion()}
        </Fragment>
      );
    }
  };

  const renderGeneral = () => {
    /**
     * TODO : Adapt the budget so it displays the logo of the currency.
     */
    let campaignBudget = campaign.details.budget.value;
    return (
      <CampaignInfoSection title={"General"}>
        <IdentifiersBlock>
          <h4 className={"campaign__name"}>{campaign.details.name}</h4>
          <p className={"campaign__id"}>{campaign.id.value}</p>
          <div className={"info"}>
            <SingleBlock title={"Status"} value={campaign.details.status} />
            <SingleBlock title={"Source"} value={campaign.details.source} />
            <SingleBlock title={"Budget"} value={campaignBudget} />
          </div>
        </IdentifiersBlock>
        <TargetsBlock />
      </CampaignInfoSection>
    );
  };

  const renderStats = () => {
    let campaignViews = campaign.statistics.views;
    let campaignExpectedViews = getViewsTotal(
      Object.values(campaignViews.expected.counts)
    );
    let campaignClicks = campaign.statistics.clicks;
    return (
      <CampaignInfoSection title={"Stats"}>
        <SingleBlock title={"Expected views"} value={campaignExpectedViews} />
        <SingleBlock title={"Real views"} value={"value"} />
        <SingleBlock title={"Unique visitors"} value={campaignClicks.unique} />
        <SingleBlock title={"Visitor total"} value={campaignClicks.count} />
        <ViewsDetailBlock />
      </CampaignInfoSection>
    );
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

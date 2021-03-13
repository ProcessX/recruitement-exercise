import React from "react";
import { Link } from "react-router-dom";
import ThumbnailOptions from "./ThumbnailOptions";

const CampaignThumbnail = ({ campaign }) => {
  const LINKURL = "/campaign-details?id=";

  return (
    <Link to={`${LINKURL}${campaign.id.value}`} className={"campaignThumbnail"}>
      <p className={"campaign__status"}>{campaign.details.status}</p>
      <h3 className={"campaign__name"}>{campaign.details.name}</h3>
      <p className={"campaign__id"}>{campaign.id.value}</p>
      <ThumbnailOptions />
    </Link>
  );
};

export default CampaignThumbnail;

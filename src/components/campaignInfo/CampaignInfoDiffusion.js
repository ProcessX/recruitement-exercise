import React from "react";
import CampaignInfo from "./CampaignInfo";
import SingleBlock from "./infoBlocks/SingleBlock";
import SlotsBlock from "./infoBlocks/SlotsBlock";

const CampaignInfoDiffusion = ({ diffusion }) => {
  return (
    <CampaignInfo title={"Diffusion"} classname={"diffusion"}>
      <SingleBlock title={"From"} value={"value"} />
      <SingleBlock title={"To"} value={"value"} />
      <SlotsBlock diffusion={diffusion} />
    </CampaignInfo>
  );
};

export default CampaignInfoDiffusion;

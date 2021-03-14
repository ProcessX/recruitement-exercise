import React from "react";
import CampaignInfo from "./CampaignInfo";
import SingleBlock from "./infoBlocks/SingleBlock";
import SlotsBlock from "./infoBlocks/SlotsBlock";

const CampaignInfoDiffusion = ({ diffusion, updateSlot }) => {
  const dateFormatting = (date) => {
    const dateFormatted = new Date(date);
    return `${dateFormatted.getDay()} ${dateFormatted.getMonth()} ${dateFormatted.getFullYear()}`;
  };

  return (
    <CampaignInfo title={"Diffusion"} classname={"diffusion"}>
      <SingleBlock
        title={"From"}
        value={dateFormatting(diffusion.period.from)}
      />
      <SingleBlock title={"To"} value={dateFormatting(diffusion.period.to)} />
      <SlotsBlock
        slots={diffusion.slots.slots}
        updateSlot={(day, slot) => updateSlot(day, slot)}
      />
    </CampaignInfo>
  );
};

export default CampaignInfoDiffusion;

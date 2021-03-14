import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import SlotsArray from "./slotsElem/SlotsArray";

const SlotsBlock = ({ slots }) => {
  const slotsWeek = Object.entries(slots).slice(0, 5);
  const slotsWeekend = Object.entries(slots).slice(5, 7);

  return (
    <InfoBlock title={"Slots"} className={"slotsBlock"}>
      <SlotsArray slots={slotsWeek} />
    </InfoBlock>
  );
};

export default SlotsBlock;

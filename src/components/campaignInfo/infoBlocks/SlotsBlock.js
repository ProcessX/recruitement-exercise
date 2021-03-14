import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import SlotsArray from "./slotsElem/SlotsArray";

const SlotsBlock = ({ slots }) => {
  return (
    <InfoBlock title={"Slots"} className={"slotsBlock"}>
      <SlotsArray slots={slots} />
    </InfoBlock>
  );
};

export default SlotsBlock;

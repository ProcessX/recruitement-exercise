import React from "react";
import InfoBlock from "./InfoBlock";
import TargetList from "./targetsElem/TargetList";

// eslint-disable-next-line react/prop-types
const TargetsBlock = () => {
  return (
    <InfoBlock title={"Targets"}>
      <TargetList />
    </InfoBlock>
  );
};

export default TargetsBlock;

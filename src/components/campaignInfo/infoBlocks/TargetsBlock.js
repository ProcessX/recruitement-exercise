import React from "react";
import InfoBlock from "./InfoBlock";
import TargetList from "./targetsElem/TargetList";

// eslint-disable-next-line react/prop-types
const TargetsBlock = ({ targets, deleteTarget }) => {
  return (
    <InfoBlock title={"Targets"}>
      <TargetList
        targets={targets}
        deleteTarget={(value) => deleteTarget(value)}
      />
    </InfoBlock>
  );
};

export default TargetsBlock;

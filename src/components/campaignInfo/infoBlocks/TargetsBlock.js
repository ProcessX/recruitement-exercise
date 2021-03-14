import React from "react";
import InfoBlock from "./InfoBlock";
import TargetList from "./targetsElem/TargetList";
import TargetNew from "./targetsElem/TargetNew";

const TargetsBlock = ({ targets, deleteTarget, addTarget }) => {
  const testAddTarget = (value) => {
    console.log(value);
  };

  return (
    <InfoBlock title={"Targets"}>
      <TargetList
        targets={targets}
        deleteTarget={(value) => deleteTarget(value)}
      />
      <TargetNew targets={targets} addTarget={(value) => addTarget(value)} />
    </InfoBlock>
  );
};

export default TargetsBlock;

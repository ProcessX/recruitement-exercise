import React from "react";
import Target from "./Target";

const TargetList = ({ targets }) => {
  const renderList = () => {
    console.log(targets);
    return targets.segments.map((target) => {
      return (
        <li key={target.value} className={"target__el"}>
          <Target value={target.value} />
        </li>
      );
    });
  };
  return <ul className={"target__li"}>{renderList()}</ul>;
};

export default TargetList;

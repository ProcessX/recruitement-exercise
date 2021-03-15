import React from "react";

const Slot = ({ timeRange, value, updateSlot }) => {
  return (
    <div
      className={`slot ${value ? " slot--checked" : ""}`}
      onClick={() => updateSlot(timeRange)}
    >
      <span className={"slot__state"}>{`` + value}</span>
    </div>
  );
};

export default Slot;

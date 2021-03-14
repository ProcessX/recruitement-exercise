import React from "react";

const Slot = ({ timeRange, value, updateSlot }) => {
  return (
    <div className={"slot"} onClick={() => updateSlot(timeRange)}>
      <p className={"slot__state"}>{`` + value}</p>
    </div>
  );
};

export default Slot;

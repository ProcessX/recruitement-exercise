import React from "react";

const Target = ({ value }) => {
  return (
    <div className={"target"}>
      <p className={"target__value"}>{value}</p>
      <button className={"btn btn--deleteValue"}>Delete</button>
    </div>
  );
};

export default Target;

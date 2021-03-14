import React from "react";

const Target = ({ value, deleteTarget }) => {
  return (
    <div className={"target"}>
      <p className={"target__value"}>{value}</p>
      <button
        className={"btn btn--deleteValue"}
        onClick={() => deleteTarget(value)}
      >
        Delete
      </button>
    </div>
  );
};

export default Target;

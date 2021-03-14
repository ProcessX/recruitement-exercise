import React from "react";
import SlotsColumn from "./SlotsColumn";

const slotsArray = ({ slots }) => {
  const renderColumns = () => {
    return Object.entries(slots).map((column, index) => {
      return (
        <li>
          <SlotsColumn title={column[0]} />
        </li>
      );
    });
  };

  return (
    <div className={"slots__array"}>
      <ul className={"slots__column__li"}>{renderColumns()}</ul>
    </div>
  );
};

export default slotsArray;

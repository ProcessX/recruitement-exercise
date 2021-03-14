import React from "react";
import SlotsRow from "./SlotsRow";

const slotsArray = ({ title, slots }) => {
  const renderRows = () => {
    return slots.map((row) => {
      return (
        <li className={"slots__row__el"} key={row[0]}>
          <SlotsRow title={row[0]} slots={row[1]} />
        </li>
      );
    });
  };

  return (
    <div className={"slots__array"}>
      <ul className={"slots__row__li"}>{renderRows()}</ul>
    </div>
  );
};

export default slotsArray;

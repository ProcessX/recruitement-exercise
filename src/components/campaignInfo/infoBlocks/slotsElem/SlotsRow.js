import React from "react";

const SlotsRow = ({ title, slots }) => {
  const renderSlots = () => {
    return Object.entries(slots).map((brick) => {
      return (
        <li key={brick[0]} className={"row__brick__el"}>
          <p>{`${brick[1]}`}</p>
        </li>
      );
    });
  };

  return (
    <div className={"slots__row"}>
      <h4 className={"row__title"}>{title}</h4>
      <ul className={"row__brick__li"}>{renderSlots()}</ul>
    </div>
  );
};

export default SlotsRow;

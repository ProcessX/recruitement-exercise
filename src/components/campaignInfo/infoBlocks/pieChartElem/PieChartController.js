import React, { Fragment } from "react";

const PieChartController = ({ categories }) => {
  const renderButtons = () => {
    return (
      <Fragment>
        {categories.map((elem, index) => {
          return <button key={elem}>{elem}</button>;
        })}
      </Fragment>
    );
  };

  return <div className={"pieChart__controller"}>{renderButtons()}</div>;
};

export default PieChartController;

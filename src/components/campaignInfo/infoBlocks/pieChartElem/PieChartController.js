import React, { Fragment } from "react";

const PieChartController = ({ keys, changeKey }) => {
  const renderButtons = () => {
    return (
      <Fragment>
        {keys.map((elem, index) => {
          return (
            <button key={elem} onClick={() => changeKey(elem)}>
              {elem}
            </button>
          );
        })}
      </Fragment>
    );
  };

  return <div className={"pieChart__controller"}>{renderButtons()}</div>;
};

export default PieChartController;

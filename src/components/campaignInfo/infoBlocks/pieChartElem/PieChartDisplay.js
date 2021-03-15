import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const PieChartDisplay = ({ counts }) => {
  const COLORS = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
  const chartThickness = 36;

  const viewsTotal = Object.values(counts).reduce((accumulator, count) => {
    return (accumulator += count);
  });

  const getFormattedViewsData = (data) => {
    let dataAsArray = Object.entries(data);

    return dataAsArray.map((elem, index) => {
      return { title: elem[0], value: elem[1], color: COLORS[index] };
    });
  };

  return (
    <div className={"piechart__display"}>
      <PieChart
        data={getFormattedViewsData(counts)}
        lineWidth={chartThickness}
      />
      <div className={"piechart__info"}>
        <h5 className={"piechart__message"}>Total</h5>
        <p className={"piechart__total"}>{viewsTotal}</p>
      </div>
    </div>
  );
};

export default PieChartDisplay;

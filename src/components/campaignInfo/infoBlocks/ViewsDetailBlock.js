import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import { PieChart } from "react-minimal-pie-chart";
import PieChartController from "./pieChartElem/PieChartController";

const ViewsDetailBlock = ({ views }) => {
  const [currentViewsData, setCurrentViewsData] = useState({});

  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

  const getFormattedViewsData = (data) => {
    let dataAsArray = Object.entries(data);

    return dataAsArray.map((elem, index) => {
      return { title: elem[0], value: elem[1], color: colors[index] };
    });
  };

  return (
    <InfoBlock className={"viewsDetailBlock"} title={"Views Detail"}>
      <PieChartController categories={Object.keys(views)} />
      <PieChart
        data={getFormattedViewsData(views.unique.counts)}
        lineWidth={20}
      />
    </InfoBlock>
  );
};

export default ViewsDetailBlock;

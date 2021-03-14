import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import { PieChart } from "react-minimal-pie-chart";
import PieChartController from "./pieChartElem/PieChartController";
import ViewsCounterList from "./pieChartElem/ViewsCounterList";

const ViewsDetailBlock = ({ views }) => {
  const [viewsKey, setViewsKey] = useState(Object.keys(views)[0]);

  const COLORS = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];

  const getFormattedViewsData = (data) => {
    let dataAsArray = Object.entries(data);

    return dataAsArray.map((elem, index) => {
      return { title: elem[0], value: elem[1], color: COLORS[index] };
    });
  };

  return (
    <InfoBlock className={"viewsDetailBlock"} title={"Views Detail"}>
      <PieChartController
        keys={Object.keys(views)}
        changeKey={(key) => setViewsKey(key)}
      />
      <ViewsCounterList counts={views[viewsKey].counts} />
      <PieChart
        data={getFormattedViewsData(views[viewsKey].counts)}
        lineWidth={20}
      />
    </InfoBlock>
  );
};

export default ViewsDetailBlock;

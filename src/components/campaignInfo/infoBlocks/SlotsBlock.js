import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
//import DatePicker from "react-modern-calendar-datepicker";
import { Calendar } from "react-modern-calendar-datepicker";

const SlotsBlock = ({ diffusion }) => {
  const [selectedDay, setSelectedDay] = useState([]);

  return (
    <InfoBlock title={"Slots"} className={"slotsBlock"}>
      <p>Calendar</p>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
      />
    </InfoBlock>
  );
};

export default SlotsBlock;

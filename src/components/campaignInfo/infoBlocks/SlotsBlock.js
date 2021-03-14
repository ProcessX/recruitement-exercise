import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const SlotsBlock = ({ diffusion }) => {
  const [selectedDay, setSelectedDay] = useState([]);

  const dateFormatting = (date) => {
    console.log("Get formatted date");
    const dateFormatted = new Date(date);
    return {
      year: dateFormatted.getFullYear(),
      month: dateFormatted.getMonth(),
      day: dateFormatted.getDay(),
    };
  };

  const slotFormatting = (slot) => {
    return null;
  };

  const getDateArray = () => {
    return [];
  };

  return (
    <InfoBlock title={"Slots"} className={"slotsBlock"}>
      <p>Calendar</p>
      <p>{diffusion.period.to}</p>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        minimumDate={dateFormatting(diffusion.period.from)}
        maximumDate={dateFormatting(diffusion.period.to)}
        shouldHighlightWeekends
      />
    </InfoBlock>
  );
};

export default SlotsBlock;

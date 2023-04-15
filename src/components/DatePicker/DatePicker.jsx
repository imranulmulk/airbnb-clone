import React, { useState } from "react";
import "./datePicker.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import PeopleIcon from "@mui/icons-material/People";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="datePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <div className="datePicker__details">
        <div className="datePicker__top">
          <h2>Number of guests</h2>
          <PeopleIcon />
        </div>
        <input min={0} defaultValue={2} type="number" />
        <Link to="/search">
          <Button className="datePicker__searchButton">Search Airbnb</Button>
        </Link>
      </div>
    </div>
  );
};

export default DatePicker;

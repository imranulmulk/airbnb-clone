import React, { useState } from "react";
import "./banner.css";
import { Button } from "@mui/material";
import DatePicker from "../DatePicker/DatePicker";
import { Link } from "react-router-dom";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <DatePicker />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gataway to uncover the hidden gems near you.
        </h5>
        <Link to="/search">
          <Button className="banner__infoButton" variant="outlined">
            Explore Nearby
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

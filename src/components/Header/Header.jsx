import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/airbnb.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [getInput, setGetInput] = useState("");

  const getInputData = (e) => {
    const inputData = e.target.value;
    setGetInput(inputData);
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img src={Logo} alt="airbnb-logo" />
        </div>
      </Link>
      <div className="header__center">
        <input
          type="text"
          placeholder="Search Airbnb"
          value={getInput}
          onChange={getInputData}
        />
        <Link to={`${getInput ? "/search" : ""}`}>
          <SearchIcon className="header__search" />
        </Link>
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Search = (props) => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      <input {...props} />
    </div>
  );
};

export default Search;

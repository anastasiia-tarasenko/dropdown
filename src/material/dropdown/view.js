import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAfrica, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const DropDownView = (props) => {
  const { options, isOpen, setOpen } = props;

  return (
    <div className="dropdown">
      <div
        className={clsx("main", { "active": isOpen })}
        onClick={() => setOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faEarthAfrica} className="countryIcon" />

        <div className="content">
          <p className="title">Countries</p>
          <p className="value">All Countries</p>
        </div>

        <FontAwesomeIcon icon={faCaretDown} className="arrowIcon" />
      </div>
    </div>
  );
};

DropDownView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default DropDownView;

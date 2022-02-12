import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Checkbox = (props) => {
  const { label, ...otherCheckboxProps } = props;

  return (
    <label className="checkbox">
      {label}
      <input {...otherCheckboxProps} type="checkbox" />
      <span className="checkmark" />
      <FontAwesomeIcon icon={faCheck} className="checkmarkIcon" />
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Checkbox;

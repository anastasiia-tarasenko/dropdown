import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const ButtonWithIcon = (props) => {
  const { icon, label, ...otherBtnProps } = props;

  return (
    <button className="btnWithIcon" {...otherBtnProps}>
      <FontAwesomeIcon icon={icon} className="btnIcon" />
      {label}
    </button>
  );
};

ButtonWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default ButtonWithIcon;

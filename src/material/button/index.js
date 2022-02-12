import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Button = (props) => {
  const { icon, label, ...otherBtnProps } = props;

  return (
    <button className="btn" {...otherBtnProps}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;

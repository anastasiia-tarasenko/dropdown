import React, { useState } from "react";
import PropTypes from "prop-types";
import DropDownView from "./view";

const DropDown = (props) => {
  const { options } = props;
  const [isOpen, setOpen] = useState(false);

  return <DropDownView options={options} isOpen={isOpen} setOpen={setOpen} />;
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropDown;

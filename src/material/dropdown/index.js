import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import DropDownView from "./view";
import {
  selectCountry,
  removeCountry,
} from "../../state/actions/dropdownstatus";

const DropDown = (props) => {
  const { options } = props;

  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(true);

  const selectedData = useSelector(
    (state) => state.dropdownStatus.selectedCountries
  );

  const onSelect = (value) => {
    if (selectedData[value.value]) {
      dispatch(removeCountry(value));
    } else {
      dispatch(selectCountry(value));
    }
  };

  return (
    <DropDownView
      options={options}
      isOpen={isOpen}
      setOpen={setOpen}
      selectedData={selectedData}
      onSelect={onSelect}
    />
  );
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

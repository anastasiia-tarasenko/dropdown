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

  const convertSelectedDataToArray = () =>
    Object.entries(selectedData).map(([value, label]) => ({
      label,
      value,
    }));

  const onSelect = (value) => {
    const callback = selectedData[value.value] ? removeCountry : selectCountry;

    dispatch(callback(value));
  };

  const onFilter = () => {
    setOpen(false);

    const result = convertSelectedDataToArray();

    console.log("FILTER", result);
  };

  return (
    <DropDownView
      options={options}
      isOpen={isOpen}
      setOpen={setOpen}
      selectedData={selectedData}
      onSelect={onSelect}
      onFilter={onFilter}
      convertSelectedDataToArray={convertSelectedDataToArray}
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

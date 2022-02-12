import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAfrica,
  faCaretDown,
  faCirclePlus,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../search";
import Button from "../button";
import ButtonWithIcon from "../buttonWithIcon";
import Checkbox from "../checkbox";

import "./style.css";

const DropDownView = (props) => {
  const {
    options,
    isOpen,
    setOpen,
    onSelect,
    selectedData,
    onFilter,
    convertSelectedDataToArray,
  } = props;

  const getOptionItem = (item) => (
    <Checkbox
      key={item.value}
      label={item.label}
      checked={!!selectedData[item.value]}
      onChange={() => onSelect(item)}
    />
  );

  const optionsListElement = options.map(getOptionItem);

  const optionsContentElement = isOpen && (
    <div className={clsx("optionsContent", "fadeIn")}>
      <Search placeholder="Search Site" />

      <ButtonWithIcon icon={faCirclePlus} label="Select all" />
      <ButtonWithIcon icon={faCircleXmark} label="Select none" />

      <div className="optionsList">{optionsListElement}</div>

      <Button label="Filter" onClick={onFilter} />
    </div>
  );

  const countOfSelectedData = convertSelectedDataToArray().length;

  const title = isOpen || !countOfSelectedData 
    ? "All Countries"
    : `${countOfSelectedData} Countries`;

  return (
    <div className="dropdown">
      <div
        className={clsx("main", { active: isOpen })}
        onClick={() => setOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faEarthAfrica} className="countryIcon" />

        <div className="content">
          <p className="title">Countries</p>
          <p className="value">{title}</p>
        </div>

        <FontAwesomeIcon icon={faCaretDown} className="arrowIcon" />
      </div>

      {optionsContentElement}
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
  selectedData: PropTypes.object,
  setOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  convertSelectedDataToArray: PropTypes.func.isRequired,
};

export default DropDownView;

import React from "react";
import clsx from "clsx";
import { PropsView } from "./propTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
    label,
    icon,
    options,
    isOpen,
    setOpen,
    onSelect,
    selectedOptions,
    onFilter,
    convertToArray,
  } = props;

  const getOptionItem = (item) => (
    <Checkbox
      key={item.value}
      label={item.label}
      checked={!!selectedOptions[item.value]}
      onChange={() => onSelect(item)}
    />
  );

  const optionsListElement = options.map(getOptionItem);

  const optionsContentElement = isOpen && (
    <div className="optionsContent fadeIn">
      <Search placeholder="Search Site" />

      <ButtonWithIcon icon={faCirclePlus} label="Select all" />
      <ButtonWithIcon icon={faCircleXmark} label="Select none" />

      <div className="optionsList">{optionsListElement}</div>

      <Button label="Filter" onClick={onFilter} />
    </div>
  );

  const countOfSelectedData = convertToArray().length;

  const valueLabelElement =
    isOpen || !countOfSelectedData ? (
      <p className="value">{`All ${label}`}</p>
    ) : (
      <p className="value result">{`${countOfSelectedData} ${label}`}</p>
    );

  return (
    <div className="dropdown">
      <div
        className={clsx("main", { active: isOpen })}
        onClick={() => setOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={icon} className="dropdownIcon" />

        <div className="content">
          <p className="title">{label}</p>
          {valueLabelElement}
        </div>

        <FontAwesomeIcon icon={faCaretDown} className="arrowIcon" />
      </div>

      {optionsContentElement}
    </div>
  );
};

DropDownView.propTypes = PropsView;

export default DropDownView;

import React, { useState } from "react";
import { Props } from "./propTypes";
import DropDownView from "./view";

const DropDown = (props) => {
  const {
    options,
    selectedOptions,
    updateSelectedOptions,
    onUnselect,
    ...otherProps
  } = props;

  const [isOpen, setOpen] = useState(true);

  const convertToArray = () =>
    Object.entries(selectedOptions).map(([value, label]) => ({
      label,
      value,
    }));

  const onSelect = (value) => {
    let result = { ...selectedOptions };

    if (selectedOptions[value.value]) {
      delete result[value.value];
    } else {
      result = { ...result, [value.value]: value.label };
    }

    updateSelectedOptions(result);
  };

  const onFilter = () => {
    setOpen(false);

    const result = convertToArray();

    console.log("FILTER", result);
  };

  return (
    <DropDownView
      {...otherProps}
      options={options}
      selectedOptions={selectedOptions}
      isOpen={isOpen}
      setOpen={setOpen}
      onSelect={onSelect}
      onFilter={onFilter}
      convertToArray={convertToArray}
    />
  );
};

DropDown.propTypes = Props;

export default DropDown;

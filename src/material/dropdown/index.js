import React, { useState, useCallback } from "react";
import { Props } from "./propTypes";
import DropDownView from "./view";

const DropDown = (props) => {
  const {
    options,
    selectedOptions,
    updateSelectedOptions,
    ...otherProps
  } = props;

  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const convertToArray = useCallback(() =>
    Object.entries(selectedOptions).map(([value, label]) => ({
      label,
      value,
    })), [selectedOptions]);

  const onSelect = useCallback((value) => {
    let result = { ...selectedOptions };

    if (selectedOptions[value.value]) {
      delete result[value.value];
    } else {
      result = { ...result, [value.value]: value.label };
    }

    updateSelectedOptions(result);
  }, [selectedOptions, updateSelectedOptions]);

  const onFilter = useCallback(() => {
    setOpen(false);

    const result = convertToArray();

    console.log("FILTER", result);
  }, [convertToArray]);

  const onSelectAll = useCallback(() => {
    const newSelectedOptions = options.reduce(
      (obj, cur) => ({ ...obj, [cur.value]: cur.label }),
      {}
    );

    updateSelectedOptions(newSelectedOptions);
  }, [options, updateSelectedOptions]);

  const onSelectNone = useCallback(() => {
    updateSelectedOptions({});
  }, [updateSelectedOptions]);

  const handleSearch = useCallback((event) => {
    const { value } = event.target;

    setSearch(value);
  }, []);

  const getOptions = useCallback(() => {
    if (search) {
      return options.filter((value) =>
        value.label.toLowerCase().includes(search.toLowerCase())
      );
    }

    return options;
  }, [options, search]);

  return (
    <DropDownView
      {...otherProps}
      options={getOptions()}
      selectedOptions={selectedOptions}
      isOpen={isOpen}
      setOpen={setOpen}
      onSelect={onSelect}
      onFilter={onFilter}
      onSelectAll={onSelectAll}
      onSelectNone={onSelectNone}
      search={search}
      handleSearch={handleSearch}
      countOfSelectedData={convertToArray().length}
    />
  );
};

DropDown.propTypes = Props;

export default DropDown;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../material/dropdown";
import {
  setCountries,
  updateSelectedCountries,
} from "../state/actions/dropdownstatus";
import countriesJson from "../countries.json";
import { faEarthAfrica } from "@fortawesome/free-solid-svg-icons";

import "./app.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountries(countriesJson));
  }, [dispatch]);

  const countries = useSelector((state) => state.dropdownStatus.countries);
  const selectedCountries = useSelector(
    (state) => state.dropdownStatus.selectedCountries
  );

  const handleSelectedCountries = (value) => {
    dispatch(updateSelectedCountries(value));
  };

  return (
    <div className={`app`}>
      <DropDown
        label="Countries"
        icon={faEarthAfrica}
        options={countries}
        selectedOptions={selectedCountries}
        updateSelectedOptions={handleSelectedCountries}
      />
    </div>
  );
};

export default App;

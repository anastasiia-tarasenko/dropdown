import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../material/dropdown/dropdown";
import { setCountries } from "../state/actions/dropdownstatus";
import countriesJson from "../countries.json";

import "./app.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountries(countriesJson));
  }, [dispatch]);

  const countries = useSelector((state) => state.dropdownStatus.countries);

  return (
    <div className={`app`}>
      <DropDown options={countries} />
    </div>
  );
};

export default App;

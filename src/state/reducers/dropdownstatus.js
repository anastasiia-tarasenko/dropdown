import {
  SELECT_COUNTRY,
  SET_COUNTRIES,
  REMOVE_COUNTRY,
} from "../actions/dropdownstatus";

const defaultState = {
  countries: [],
  selectedCountries: {},
};

export const dropdownStatus = (state = defaultState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SET_COUNTRIES: {
      const newState = { ...state, countries: action.countries };

      console.log("SET_COUNTRIES", newState);
      return newState;
    }

    case SELECT_COUNTRY: {
      const { value, label } = action.country;

      const newState = {
        ...state,
        selectedCountries: {
          ...state.selectedCountries,
          [value]: label,
        },
      };

      console.log("SELECT_COUNTRY", newState);
      return newState;
    }

    case REMOVE_COUNTRY: {
      const { value } = action.country;
      const newSelectedCountries = { ...state.selectedCountries };

      delete newSelectedCountries[value];

      const newState = {
        ...state,
        selectedCountries: newSelectedCountries,
      };

      console.log("REMOVE_COUNTRY", newState);
      return newState;
    }

    default:
      return newState;
  }
};

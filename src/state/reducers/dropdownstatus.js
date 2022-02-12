import {
  UPDATE_SELECT_COUNTRIES,
  SET_COUNTRIES,
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

    case UPDATE_SELECT_COUNTRIES: {
      const newState = {
        ...state,
        selectedCountries: {...action.countries},
      };

      console.log("UPDATE_SELECT_COUNTRIES", newState);
      return newState;
    }

    default:
      return newState;
  }
};

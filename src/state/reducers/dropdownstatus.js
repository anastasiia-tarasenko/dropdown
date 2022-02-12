import { SET_COUNTRIES } from "../actions/dropdownstatus";

const defaultState = {
  countries: [],
};

export const dropdownStatus = (state = defaultState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case SET_COUNTRIES: {
      console.log("SET_COUNTRIES", { ...state, countries: action.countries });
      return { ...state, countries: action.countries };
    }

    default:
      return newState;
  }
};

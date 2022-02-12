export const SET_COUNTRIES = "SET_COUNTRIES";
export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  countries,
});

export const UPDATE_SELECT_COUNTRIES = "UPDATE_SELECT_COUNTRIES";
export const updateSelectedCountries = (countries) => ({
  type: UPDATE_SELECT_COUNTRIES,
  countries,
});

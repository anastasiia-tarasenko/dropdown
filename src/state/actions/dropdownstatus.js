export const SET_COUNTRIES = "SET_COUNTRIES";
export const setCountries = (countries) => ({
  type: SET_COUNTRIES,
  countries,
});

export const SELECT_COUNTRY = "SELECT_COUNTRY";
export const selectCountry = (country) => ({
  type: SELECT_COUNTRY,
  country,
});

export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const removeCountry = (country) => ({
  type: REMOVE_COUNTRY,
  country,
});

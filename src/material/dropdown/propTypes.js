import PropTypes from "prop-types";

const common = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOptions: PropTypes.object.isRequired,
}

export const Props = {
  ...common,
  updateSelectedOptions: PropTypes.func.isRequired,
};

export const PropsView = {
  ...common,
  label: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  setOpen: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSelectAll: PropTypes.func.isRequired,
  onSelectNone: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  countOfSelectedData: PropTypes.number.isRequired,
}

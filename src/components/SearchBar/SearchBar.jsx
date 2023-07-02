import React from 'react';
import css from './SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  return (
    <div className={css.searchBar__container}>
      <p className={css.searchBar__text}>Find contact</p>
      <input
        className={css.searchBar__input}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

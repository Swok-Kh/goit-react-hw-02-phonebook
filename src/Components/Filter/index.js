import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const Filter = ({ value, onChangeInput }) => {
  const id = uuidv4();
  return (
    <>
      <label htmlFor={id}>Find contacts by name</label>
      <input name="filter" value={value} onChange={onChangeInput} id={id} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Filter;

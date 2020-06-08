import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  height: 20px;
  min-width: 250px;
`;
/**
 * Reusable input component
 * @component
 * @param {string} type Type for the input
 * @param {string} placeholder Default placeholder
 * @param {string} value Current value for the placeholder
 * @param {function} handleInputChange handler for the onChange event for the input
 */
const Input = ({
  type,
  placeholder = "Enter some text here...",
  value,
  handleInputChange,
}) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
};

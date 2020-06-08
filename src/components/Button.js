import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 10px;
  border: 1px solid;
  background: white;
  max-width: 100px;
  margin: 20px;
`;

/**
 * Reusable button component
 * @component
 * @param {function} handleClick Click handler for the button
 * @param {string} type Type of the button, by default is set to submit
 * @param {string} label What should be used as a label for the button by default is set to Submit
 */
const Button = ({ handleClick, type = "submit", label = "Submit" }) => (
  <StyledButton type={type} onClick={handleClick}>
    {label}
  </StyledButton>
);
export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
};

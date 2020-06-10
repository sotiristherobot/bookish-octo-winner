import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    padding: 20px;
  }
`;
/**
 * Takes as a prop a submitfunction, renders a form and calls the render function
 * to add the individual components to the form
 * @param {function} handleSubmit
 * @param {function} render
 */
const Body = ({ handleSubmit, render, children }) => {
  return <StyledForm onSubmit={handleSubmit}>{render(children)}</StyledForm>;
};
export default Body;

Body.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
};

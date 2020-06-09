import React from "react";
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
const Body = ({ handleSubmit, render }) => {
  return <StyledForm onSubmit={handleSubmit}>{render()}</StyledForm>;
};
export default Body;

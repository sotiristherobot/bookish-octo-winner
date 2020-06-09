import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  flex-grow: 1;
  padding: 10px;
  &.active {
    background: yellow;
  }
`;
/**
 * Renders Tab header
 * @param {number} id
 * @param {string} title
 * @param {boolean} isActive
 * @param {function} setActiveTab
 * @returns {*}
 */
export default ({ id, title, isActive, setActiveTab }) => {
  const handleClick = ({ target: { id } }) => setActiveTab(parseInt(id));
  return (
    <StyledHeader
      className={isActive ? "active" : null}
      id={id}
      onClick={handleClick}
    >
      {title}
    </StyledHeader>
  );
};

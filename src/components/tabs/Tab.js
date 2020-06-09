import React from "react";
import PropTypes from "react";
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
const Tab = ({ id, title, isActive, setActiveTab }) => {
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
export default Tab;
Tab.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

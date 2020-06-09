import React from "react";
import styled from "styled-components";

const StyledTabList = styled.div`
  display: flex;
  flex-direction: row;
`;

const TabsList = ({ children }) => {
  return <StyledTabList>{children}</StyledTabList>;
};
export default TabsList;

import React from "react";
import styled from "styled-components";
import TabsContainer from "./TabsContainer";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
`;
/**
 * Main Component of the application. This was only included here to demonstrate where the
 * other modules would have been included in a real application. We pass as children a configuration
 */
const Main = () => {
  return (
    <StyledMain>
      <TabsContainer>
        {[
          {
            id: 0,
            tabName: "Employer-Tab",
            placeholder: "Enter minimum offer",
            buttonText: "submit",
          },
          {
            id: 1,
            tabName: "Employee-Tab",
            placeholder: "Enter maximum offer",
            buttonText: "submit",
          },
        ]}
      </TabsContainer>
    </StyledMain>
  );
};

export default Main;

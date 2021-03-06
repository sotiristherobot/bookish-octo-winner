import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Tab from "../../components/tabs/Tab";
import { default as TabBody } from "../../components/tabs/Body";
import useTemperature from "../../hooks/useTemperature";
import TabsList from "../../components/tabs/TabsList";

const StyledTabs = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 500px;
  border: 1px solid;
  min-height: 300px;
`;

/**
 * Gets as input a configuration object and renders the tabs along with their body
 * Contains all the logic for which tab should be activated and what panel(body) should be
 * rendered for each case
 * @param {Array} children
 * @constructor
 */
const TabsContainer = ({ children }) => {
  const [activeTab, setActiveTab] = React.useState(children[0].id || 0);
  const [inputsValue, setInputsValue] = React.useState({
    0: "",
    1: "",
  });
  /* normally we shouldn't need this. But because there is not an actual
     call to backend we need this to submit values when the form submits
     We cannot use the inputsValue, because otherwise every time the input changes
     then the form will submit
     Also if we opt to not use it at all, we loose the functionality to keep track of
     the input value when user switches tabs
   */
  const [submittedValues, setSubbmitedValues] = React.useState({
    0: "",
    1: "",
  });
  const [_, temp] = useTemperature("London");

  React.useEffect(() => {
    // check if all values have been submitted
    const allValuesSubmitted = Object.values(submittedValues).every(
      (value) => value !== ""
    );
    if (allValuesSubmitted) {
      const {
        0: employerWishedSalary,
        1: employeeWishedSalary,
      } = submittedValues;
      const status =
        parseInt(employeeWishedSalary) <= parseInt(employerWishedSalary)
          ? "Success"
          : "Failure";
      window.confirm(
        `${status}\n Maximum offer was ${employerWishedSalary} \n Minimum offer was ${employeeWishedSalary}\n
        Current temp in London is ${temp}`
      );
    }
  }, [submittedValues]);

  const handleInputChange = ({ target: { value } }) => {
    setInputsValue({ ...inputsValue, [activeTab]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubbmitedValues({
      ...submittedValues,
      [activeTab]: inputsValue[activeTab],
    });
  };

  return (
    <StyledTabs>
      <TabsList>
        {children.map((tab) => {
          const { id, tabName } = tab;
          return (
            <Tab
              key={id}
              id={id}
              isActive={activeTab === id}
              setActiveTab={setActiveTab}
              title={tabName}
            />
          );
        })}
      </TabsList>
      <TabBody
        handleSubmit={handleSubmit}
        /* we use the render props technique here, because in a real world scenario,
          different content will be rendered based on the active tab id. In this case,
          since both tabs shared the same content, we re-use the same input for both components
        */
        render={(tabs) => {
          const tabToRender = tabs[activeTab];
          return (
            <>
              {submittedValues[activeTab]
                ? "Waiting for other party to submit"
                : tabToRender}
              <Button disabled={Boolean(submittedValues[activeTab])} />
            </>
          );
        }}
      >
        {/* inputs are passed as children to body component. Then in the render function of the <TabBody/>
         component the render function is called and the appropriate panel is rendered*/}
        <Input
          type="number"
          placeholder={children[activeTab].placeholder}
          handleInputChange={handleInputChange}
          value={inputsValue[activeTab]}
        />

        <Input
          type="number"
          placeholder={children[activeTab].placeholder}
          handleInputChange={handleInputChange}
          value={inputsValue[activeTab]}
        />
      </TabBody>
    </StyledTabs>
  );
};
export default TabsContainer;
TabsContainer.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};

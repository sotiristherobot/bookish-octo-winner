import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tabs from "../components/tabs/Tabs";

/*
  By all means this is not an exhaustive list of tests. I'm only testing the basic functionality of
   TabsTest component which is basically the core component of the application.
 */
const setup = () => {
  const { container, debug } = render(
    <Tabs>
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
    </Tabs>
  );
  return { container, debug };
};
test("Should have two tabs with tab names Employer-Tab and Employee-Tab", () => {
  setup();
  expect(screen.queryByText("Employee-Tab").textContent).toBe("Employee-Tab");
  expect(screen.queryByText("Employer-Tab").textContent).toBe("Employer-Tab");
});
test("Expect input values to be empty initially", () => {
  setup();
  expect(screen.getByLabelText("salary-input").value).toBe("");
  fireEvent.change(screen.getByLabelText("salary-input"), {
    target: { value: 12356 },
  });
  fireEvent.click(screen.getByText("Employee-Tab"));
  expect(screen.getByLabelText("salary-input").value).toBe("");
});
test("Should render the correct placeholders for inputs", () => {
  setup();
  expect(screen.getByPlaceholderText("Enter minimum offer")).toBeTruthy();
  fireEvent.click(screen.getByText("Employee-Tab"));
  expect(screen.getByPlaceholderText("Enter maximum offer")).toBeTruthy();
});
test("The correct input should dissapear when a value is submitted", () => {
  const { debug } = setup();
  fireEvent.change(screen.getByLabelText("salary-input"), {
    target: { value: 12356 },
  });
  fireEvent.click(screen.getByRole("submit"));
  expect(screen.queryByLabelText("salary-input")).toBeNull();
  fireEvent.click(screen.getByText("Employee-Tab"));
  expect(screen.queryByLabelText("salary-input")).not.toBeNull();
});

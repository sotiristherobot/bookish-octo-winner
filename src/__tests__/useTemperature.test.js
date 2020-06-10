import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import useTemperature from "../hooks/useTemperature";

test("expect isLoading to be set to true initially and then change", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useTemperature("London")
  );
  expect(result.current[0]).toBe(true);
  await waitForNextUpdate();
  expect(result.current[0]).toBe(false);
});
test("expect temp to be null initially and change gradually", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useTemperature("London")
  );
  expect(result.current[1]).toBe(null);
  await waitForNextUpdate();
  expect(typeof result.current[1]).toBe("number");
});

import React from "react";
import PropTypes from "prop-types";
import { API } from "../api/constants";

/**
 * Reusable hook that returns the current temperature for the provided city
 * The isLoading @param is provided in case the component that utilizes this hook,
 * needs to display some loading logic while the data are being fetched
 * @param {string} city
 * @returns {[boolean, string]}
 */
const useTemperature = (city) => {
  const [isLoading, setIsloading] = React.useState(true);
  const [temp, setTemp] = React.useState(null);

  // we useCallback here because we want to cache the formula calculation
  const toCelcius = React.useCallback(
    (kelvin) => Math.trunc(kelvin - 273.15),
    []
  );

  React.useEffect(() => {
    setIsloading(true);
    // the app id should be stored in an .env file but I have put it here to
    // make use easier.
    fetch(`${API}?q=${city}&appid=23a5a3bad50e85f575448196aaf5af0a`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ main: { temp } }) => {
        setIsloading(false);
        setTemp(toCelcius(temp));
      })
      .catch((err) => console.error(err));
  }, [city]);

  return [isLoading, temp];
};
export default useTemperature;
useTemperature.propTypes = {
  city: PropTypes.string.isRequired,
};

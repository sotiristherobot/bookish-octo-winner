import React from "react";
import PropTypes from "prop-types";

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
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=23a5a3bad50e85f575448196aaf5af0a`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(({ main: { temp } }) => setTemp(toCelcius(temp)));
  }, [city]);

  return [isLoading, temp];
};
export default useTemperature;
useTemperature.propTypes = {
  city: PropTypes.string.isRequired,
};

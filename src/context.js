import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://restcountries.com/v3/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // set up some basic state values...
  const [loading, setLoading] = useState(true);
  const [countrySearch, setCountrySearch] = useState("all");
  const [countries, setCountries] = useState([]);

  // set up fetch
  const fetchCountries = useCallback(
    async (region) => {
      // Toggle Loading to on to tell user we're fetching data:
      setLoading(true);
      try {
        const response = await fetch(`${url}${countrySearch}`);
        const data = await response.json();
        const countriesByRegion =
          region === "Africa"
            ? data.filter((item) => item.region === "Africa")
            : region === "Americas"
            ? data.filter((item) => item.region === "Americas")
            : region === "Asia"
            ? data.filter((item) => item.region === "Asia")
            : region === "Europe"
            ? data.filter((item) => item.region === "Europe")
            : region === "Oceania"
            ? data.filter((item) => item.region === "Oceania")
            : region === "Polar" || region === ""
            ? data.filter(
                (item) => item.region === "Polar" || item.region === ""
              )
            : data;
        if (countriesByRegion) {
          // Iterate over array of fetched countries...
          const fetchedCountries = countriesByRegion.map((country) => {
            // Destructure all relevant property values out of each country object...
            const { cca3, flags, name, capital = ["N/A"] } = country;
            const main_capital = capital[0];
            const main_flag = flags[0];
            // Create a new object with simplified property names...
            return {
              id: cca3,
              image: main_flag,
              name: name.common,
              capital: main_capital,
            };
          });
          // Update state value with fetched country data...
          setCountries(fetchedCountries);
        } else {
          setCountries([]);
        }
        // Toggle Loading to off if data fetch succeeds:
        setLoading(false);
      } catch (error) {
        console.log(error);
        // Toggle Loading to off if an error occurs:
        setLoading(false);
      }
    },
    [countrySearch]
  );

  // The useEffect hook here invokes the fetchCountries function any time a user types in the search bar (NB: state value is passed into dependency array)
  useEffect(() => {
    fetchCountries();
  }, [countrySearch, fetchCountries]);

  return (
    <AppContext.Provider
      value={{ loading, setCountrySearch, countries, fetchCountries }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};
// This global hook gives the app's components access to the values listed inside the return statement above
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

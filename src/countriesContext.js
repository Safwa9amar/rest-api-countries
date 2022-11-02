// create react context  for this url https://restcountries.com/v3.1/all and export it as CountriesContext
import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children, version = "v3.1", query = "all" }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/${version}/${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 404) {
          setError(true);
          setCountries([]);
          setLoading(false);
        } else {
          setCountries(data);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [query, version]);

  return (
    <CountriesContext.Provider value={[countries, loading, error]}>
      {children}
    </CountriesContext.Provider>
  );
};
export default CountriesProvider;

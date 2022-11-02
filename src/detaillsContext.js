// create react context  for this url https://restDetaills.com/v3.1/all and export it as DetaillsContext
import { createContext, useEffect, useState } from "react";

export const DetaillsContext = createContext();

const DetaillsProvider = ({
  children,
  version = "v3.1",
  DetaillQuery = "DZA",
}) => {
  const [Detaills, setDetaills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/alpha/${DetaillQuery}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 404) {
          setError(true);
          setDetaills([]);
          setLoading(false);
        } else {
          setDetaills(data);
          setError(false);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [DetaillQuery, version]);

  return (
    <DetaillsContext.Provider value={[Detaills, loading, error]}>
      {children}
    </DetaillsContext.Provider>
  );
};
export default DetaillsProvider;

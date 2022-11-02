import { useState } from "react";
import CountriesProvider from "./countriesContext";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetaills from "./components/CountryDetaills";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollTop";

function App() {
  const [ShowDetaills, setShowDetaills] = useState(false);
  const [country, setCountry] = useState({});

  const [ApiQuery, setApiQuery] = useState("all");
  return (
    <Router>
      <CountriesProvider query={ApiQuery}>
        <Header />
        <ScrollToTop ShowDetaills={ShowDetaills} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setShowDetaills={setShowDetaills}
                setApiQuery={setApiQuery}
                setCountry={setCountry}
              />
            }
          />
          <Route
            path="/detaills"
            element={<CountryDetaills detaills={country} />}
          />
        </Routes>
      </CountriesProvider>
    </Router>
  );
}

export default App;

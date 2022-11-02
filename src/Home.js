import { useContext, useState } from "react";
import { CountriesContext } from "./countriesContext";
// import all the components from the components folder
import Search from "./components/Search";
import CountryItem from "./components/CountryItem";
import FilterByRegion from "./components/FilterByRegion";
import "./css/main.css";
import "./css/app.css";
import "./css/components.css";
import Loader from "./components/Loader";
function Home({ setApiQuery, setShowDetaills, setCountry }) {
  const [countries, loading, error] = useContext(CountriesContext);

  const handleShowDetaills = (country) => {
    setShowDetaills(true);
    setCountry(country);
  };

  const countriesPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const currentCountries = countries.slice(0, indexOfLastCountry);

  // show more data when the scroll reach the bottom of the page
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage, indexOfLastCountry);
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <main className="main">
        <div className="main__content">
          <div className={`main__content__search ${false ? "hidden" : ""}`}>
            <Search setApiQuery={setApiQuery} />
            <FilterByRegion setApiQuery={setApiQuery} />
          </div>
          <div className={`main__content__countries ${false ? "hidden" : ""}`}>
            {countries.length === 0 || error ? <h1>No countries found</h1> : ""}
            {loading ? (
              <Loader />
            ) : (
              currentCountries.map((country, index) => (
                <CountryItem
                  handleShowDetaills={handleShowDetaills}
                  key={country.name.common}
                  country={country}
                  idx={index}
                  setCountry={setCountry}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;

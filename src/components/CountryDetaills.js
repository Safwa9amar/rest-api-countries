import React, { useState } from "react";
import "../css/CountryDetaills.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function CountryDetaills({ detaills }) {
  let navigate = useNavigate();
  // get the country cioc from the url
  const cioc = window.location.search.split("=")[1];
  console.log(cioc);
  const [Detaills, setdetaills] = useState(detaills);
  // create loader state
  const [loading, setLoading] = useState(false);
  const {
    name,
    flags,
    capital,
    region,
    subregion,
    population,
    languages,
    borders,
    currencies,
    tld,
  } = Detaills;
  console.log();
  const handleBack = () => {
    navigate("/");
  };
  // handle border button
  const handleBorder = (border) => {
    setLoading(true);

    console.log(border);
    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 400) {
          setLoading(false);
          setdetaills(data[0]);
        }
      });
    console.log(Detaills);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="country-detaills">
          <button onClick={handleBack}> &#8592; Back</button>
          <div className="country-detaills__container">
            <div className="country-detaills__flag">
              <img src={flags.svg} alt={name.common} />
            </div>
            <div className="country-detaills__info">
              <h1>{name.common}</h1>
              <div className="country-detaills__info__details">
                <div className="country-detaills__info__details__left">
                  <p>
                    Native Name:
                    <span>
                      {Object.values(name.nativeName)
                        .reverse()
                        .map((name) => name.common)
                        .toString()}
                    </span>
                  </p>
                  <p>
                    Population: <span> {population}</span>
                  </p>
                  <p>
                    Region: <span> {region}</span>
                  </p>
                  <p>
                    Sub Region: <span> {subregion}</span>
                  </p>
                  <p>
                    Capital: <span> {capital}</span>
                  </p>
                </div>
                <div className="country-detaills__info__details__right">
                  <p>
                    Top Level Domain:
                    <span>{Object.values(tld).toString()}</span>
                  </p>
                  <p>
                    Currencies:
                    <span>
                      {Object.values(currencies)
                        .map((curr) => curr.name)
                        .toString()}
                    </span>
                  </p>
                  <p>
                    Languages:
                    <span> {Object.values(languages).toString()}</span>
                  </p>
                </div>
              </div>
              {borders?.length > 0 && (
                <div className="country-detaills__info__border-countries">
                  <p>Border Countries:</p>
                  <div className="country-detaills__info__border-countries__buttons">
                    {borders?.map((border, idx) => {
                      return (
                        <button
                          onClick={() => {
                            handleBorder(border);
                          }}
                          key={idx}
                        >
                          {border}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

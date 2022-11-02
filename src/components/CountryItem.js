import React from "react";
import "../css/CountryItem.css";
import { useInView } from "react-intersection-observer";
// Link from react-router-dom
import { Link } from "react-router-dom";
export default function CountryItem({ country, handleShowDetaills, idx }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  // animate the country item when it is in view
  if (inView) {
    entry.target.style.animation = `fadeIn 0.3s ease-in forwards ${
      idx * 0.05
    }s`;
  }

  return (
    <div
      onClick={(e) => {
        handleShowDetaills(country);
      }}
    >
      <Link to={`/detaills`} ref={ref} className="country">
        <div className="country__flag">
          <img src={country.flags.svg} alt={country.name.common} />
        </div>
        <div className="country__info">
          <h3 className="country__info__name">{country.name.common}</h3>
          <p className="country__info__population">
            Population:
            <span>{country.population}</span>
          </p>
          <p className="country__info__region">
            Region:
            <span>{country.region}</span>
          </p>
          <p className="country__info__capital">
            Capital:
            <span>{country.capital}</span>
          </p>
        </div>
      </Link>
    </div>
  );
}

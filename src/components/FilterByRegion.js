import React from "react";
// FilterByRegion.css
import "../css/FilterByRegion.css";

export default function FilterByRegion({ setApiQuery }) {
  const handleFilter = (e) => {
    e.target.value !== false && setApiQuery(`region/${e.target.value}`);
    e.target.value === "all" && setApiQuery(`${e.target.value}`);
  };
  return (
    <div className="filter">
      <select onChange={handleFilter} name="filter" id="filter">
        <option value="false">Filter by Region</option>
        <option value="all">all</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

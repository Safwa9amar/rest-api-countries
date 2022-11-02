import React from "react";
import "../css/search.css";

// search icon component
const SearchIco = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5001 17.5L13.7617 13.755M15.8334 8.74996C15.8334 10.6286 15.0871 12.4303 13.7588 13.7586C12.4304 15.087 10.6287 15.8333 8.75008 15.8333C6.87146 15.8333 5.06979 15.087 3.74141 13.7586C2.41303 12.4303 1.66675 10.6286 1.66675 8.74996C1.66675 6.87134 2.41303 5.06967 3.74141 3.74129C5.06979 2.4129 6.87146 1.66663 8.75008 1.66663C10.6287 1.66663 12.4304 2.4129 13.7588 3.74129C15.0871 5.06967 15.8334 6.87134 15.8334 8.74996V8.74996Z"
        stroke="var(--text)"
        strokeWidth="1.66667"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function Search({ setApiQuery }) {
  // handle search input
  const handleSearch = (e) => {
    const searchValue = e.target.value;
    searchValue !== "" && setApiQuery(`name/${searchValue}`);
  };

  return (
    <div className="search">
      <label htmlFor="searchInput">
        <SearchIco />
      </label>
      <input
        onInput={handleSearch}
        id="searchInput"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

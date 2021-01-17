import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

const SideBar = () => {
  const { search } = useLocation();
  const buildQueryString = (operation, valueObj) => {
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  /* const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
  };

  <form onSubmit={handleSearch}>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    <button type="submit">Search</button>
  </form>; */

  return (
    <nav className="sidebar">
      <ul>
        <h3>Filter by City</h3>
        <li>
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: +1 })}>
            Price Ascending
          </Link>
        </li>
        <li>
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;

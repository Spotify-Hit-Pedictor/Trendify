import "./search.scss";
import { useState } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <div className="heading">
        <h1>Reveal true POTENTIAL of the song</h1>
        <h2>Zero discrimination over advertisements and investments</h2>
      </div>
      <div className="container">
        <form className="search-box">
          <input
            type="text"
            placeholder="The song in your mind"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            <BarChartIcon className="button" />
          </button>
        </form>
      </div>
      <p>Under Development</p>
    </div>
  );
};

export default Search;

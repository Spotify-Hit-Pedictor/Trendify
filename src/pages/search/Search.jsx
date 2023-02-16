import "./search.scss";
import Analyze from "../../assets/Analyze.png";
import { height } from "@mui/system";

const Search = () => {
  return (
    <div className="search">
      <div className="heading">
        <h1>Reveal true POTENTIAL of the song</h1>
        <h2>Zero discrimination over advertisements and investments</h2>
      </div>
      <div className="container">
        <div className="search-box">
          <input type="text" placeholder="The song in your mind" />
          <button>
            <img src={Analyze} alt="analyze" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

import "./home.scss";
import Logo from "../../assets/trendify_logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="top">
        <img src={Logo} alt="" />
        <h1>Trendify</h1>
      </div>
      <div className="bottom">
        <div className="feature left">
          <p className="first">Check, Adjust, Tune</p>
          <span>PARAMETERS</span>
          <button onClick={() => navigate("/create")}>CREATE</button>
          <p className="second">Check your song's ability to create a trend.</p>
        </div>
        <div className="feature right">
          <p className="first">is the song actually</p>
          <span>MELODIOUS</span>
          <button onClick={() => navigate("/search")}>SEARCH</button>
          <p className="second">Find any existing song's actual power.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

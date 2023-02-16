import "./navbar.scss";
import Item from "./Item";
import Logo from "../../assets/trendify_logo_bg.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={Logo} alt="logo" className="logo" />
        <p className="title">TRENDIFY</p>
      </div>
      <div className="right">
        <ul>
          <li>
            <Item to="/" name="HOME" />
          </li>
          <li>
            <Item to="/create" name="CREATE" />
          </li>
          <li>
            <Item to="/search" name="SEARCH" />
          </li>
          <li>
            <Item to="/about" name="ABOUT" />
          </li>
          <li>
            <Item to="/help" name="HELP" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

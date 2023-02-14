import "./navbar.scss";
import { NavLink } from "react-router-dom";
import Item from "./Item";

const Navbar = () => {
  let activeClassName = "active";
  let inactiveClassName = "inactive";

  return (
    <div className="navbar">
      <div className="left">
        <p className="title">Trendify</p>
      </div>
      <div className="right">
        <ul>
          <li>
            <Item to="/" name="Home" />
          </li>
          <li>
            <Item to="/create" name="Create" />
          </li>
          <li>
            <Item to="/search" name="Search" />
          </li>
          <li>
            <Item to="/about" name="About" />
          </li>
          <li>
            <Item to="/help" name="Help" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

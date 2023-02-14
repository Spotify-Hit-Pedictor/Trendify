import { NavLink } from "react-router-dom";
import "./item.scss";

const Item = (props) => {
  let activeClassName = "active";
  let inactiveClassName = "inactive";

  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? activeClassName : inactiveClassName
      }
    >
      {props.name}
    </NavLink>
  );
};

export default Item;

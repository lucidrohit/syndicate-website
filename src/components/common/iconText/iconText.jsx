import "./iconText.scss";
import { NavLink } from "react-router-dom";

const IconText = ({ icon, text, path }) => {
  return (
    <NavLink className="iconText" to={path}>
      <i className="iconText__icon  ">{icon}</i>
      <span className="iconText__text">{text}</span>
    </NavLink>
  );
};

export default IconText;

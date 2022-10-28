import "./navBar.scss";

import IconText from "../common/iconText/iconText";

import about from "./icons/about.js";
import community from "./icons/community.js";
import home from "./icons/home.js";
import team from "./icons/team.js";
import events from "./icons/events.js";
const navBar = [
  {
    icon: home,
    text: "Home",
    path: "",
  },
  {
    icon: events,
    text: "Events",
    path: "events",
  },
  {
    icon: about,
    text: "About Us",
    path: "about",
  },
  {
    icon: community,
    text: "Community",
    path: "community",
  },
  {
    icon: team,
    text: "Team",
    path: "team",
  },
];

const NavBar = ({ activeClass, setActiveClass }) => {
  return (
    <div className="navbar sideBar__element">
      <div className="box--bg box ">
        {navBar.map(({ icon, text, path }, index) => (
          <IconText
            icon={icon}
            text={text}
            path={path}
            key={index}
            setActiveClass={setActiveClass}
            activeClass={activeClass}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;

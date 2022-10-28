import "./sideBar.scss";
import NavBar from "../navBar/navBar";
import UserProfile from "../userProfile/userProfile";

const SideBar = ({ isNav }) => {
  return (
    <aside className={"sideBar " + (isNav ? "active" : null)}>
      <UserProfile />
      <NavBar />
    </aside>
  );
};

export default SideBar;

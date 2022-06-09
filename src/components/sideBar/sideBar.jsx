
import "./sideBar.scss"
import NavBar from "../navBar/navBar"

const SideBar = ({activeClass,setActiveClass}) => {
   return (
      <aside className="sideBar">
         <NavBar activeClass={activeClass} setActiveClass={setActiveClass} />
      </aside>
   );
}

export default SideBar;
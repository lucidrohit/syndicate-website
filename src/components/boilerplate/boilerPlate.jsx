import SideBar from "../sideBar/sideBar";
import "./boilerPlate.scss";
import HeadingText from "../common/headingText/headingText";
import CarouselComponent from "../common/carouselComponent/CarouselComponent";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function BoilerPlate() {
  const [activeNav, setActiveNav] = useState(false);
  return (
    <>
      <div className="hamburger">
        <div
          onClick={() => setActiveNav(!activeNav)}
          className={"burger burger-arrow " + (activeNav ? "open" : null)}
        >
          <div class="burger-lines"></div>
        </div>
      </div>
      <SideBar isNav={activeNav} />
      <div className="content">
        <div className="container">
          <HeadingText>upcoming Events</HeadingText>
          <CarouselComponent />
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default BoilerPlate;

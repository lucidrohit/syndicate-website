import "./App.scss"
import SideBar from "./components/sideBar/sideBar";
import About from "./pages/about/about"
import HeadingText from "./components/common/headingText/headingText";
import CarouselComponent from "./components/common/carouselComponent/CarouselComponent";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home"
import Community from "./pages/community/community";
import Team from "./pages/team/team";
import Events from "./pages/events/events";


function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="content">
        <div className="container">
          <HeadingText>upcoming text</HeadingText>
          <CarouselComponent />
        </div>
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

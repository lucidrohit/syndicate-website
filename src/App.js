import "./App.scss";
import About from "./pages/about/about";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Community from "./pages/community/community";
import Team from "./pages/team/team";
import Events from "./pages/events/events";
import BoilerPlate from "./components/boilerplate/boilerPlate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BoilerPlate />}>
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="community" element={<Community />} />
          <Route path="team" element={<Team />} />
          <Route path="events" element={<Events />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

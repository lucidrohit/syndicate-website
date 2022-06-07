import "./App.scss"
import SideBar from "./components/sideBar/sideBar";
import About from "./pages/about/about"

function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className="content">
        <About/>
      </div>
    </div>
  );
}

export default App;

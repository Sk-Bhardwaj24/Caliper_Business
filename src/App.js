import "./App.css";
import { Home } from "./components/Home";
import { Nabvar } from "./components/Navbar";
import Project from "./components/Project";
import Service from "./components/Service";
function App() {
  return (
    <div className="App">
      <Nabvar />
      {/* <Home /> */}
      {/* <Project /> */}
      <Service />
    </div>
  );
}

export default App;

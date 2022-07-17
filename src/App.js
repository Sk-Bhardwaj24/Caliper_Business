import "./App.css";
import { Home } from "./components/Home";
import { Nabvar } from "./components/Navbar";
import Service from "./components/Service";
function App() {
  return (
    <div className="App">
      <Nabvar />
      {/* <Home /> */}
      <Service />
    </div>
  );
}

export default App;

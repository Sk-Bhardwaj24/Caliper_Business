import "./App.css";
import { Home } from "./components/Home";
import { Nabvar } from "./components/Navbar";
import Project from "./components/Project";
import Service from "./components/Service";
import { Route, Routes } from "react-router-dom";
import Fotter from "./components/Footer";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

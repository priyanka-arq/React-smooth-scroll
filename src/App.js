import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enrol from "./pages/enrol/Enrol";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/enrol" element={<Enrol />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

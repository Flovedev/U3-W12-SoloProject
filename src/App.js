import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import BottomBarComponent from "./components/BottomBarComponent";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column" id="all-content">
        <div className="d-flex flex-grow-1" id="top-content">
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
          </Routes>
        </div>
        <BottomBarComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

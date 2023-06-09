import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Card from "./pages/Home/card";
import Footer from "./pages/Home/Footer";
import "./pages/Home/Home.css";
import WeddingHall from "./pages/weddingHall/weddingHall";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={Home}></Route>
        <Route path="/weddingHall" element={WeddingHall}></Route>
      </Routes>
      {/* <Home></Home> */}

      {/* <Footer /> */}
    </div>
  );
}

export default App;

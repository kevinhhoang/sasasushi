import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Alacarte from "./components/Menus/Alacarte/Alacarte";
import Lunch from "./components/Menus/Lunch/Lunch";
import Supper from "./components/Menus/Supper/Supper";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/menus/alacarte" component={Alacarte} />
        <Route path="/menus/lunch" component={Lunch} />
        <Route path="/menus/supper" component={Supper} />
        <Route path="/gallery" component={Gallery} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
